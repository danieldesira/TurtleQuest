import Game from "./Game";
import Turtle from "./characters/Turtle";
import Directions from "./enums/Directions";
import { updateDialogContent } from "./features/dialogs/dialogReducer";
import { stopGame } from "./features/gameState/gameStateReducer";
import { levelUp } from "./features/levels/levelReducer";
import {
  breath,
  gainPoints,
  recoverStomachCapacity,
  respire,
  useFood,
} from "./features/turtleMonitor/turtleReducers";
import levels, { LevelChangeTypes } from "./levels/levels";
import store from "./store";
import INonMainCharacter from "./characters/interfaces/INonMainCharacter";

async function checkTurtle(): Promise<LevelChangeTypes> {
  const mainCharacter = Game.instance.turtle;
  const bgWidth = Game.instance.level.bgImg.width;

  store.dispatch(useFood());
  store.dispatch(recoverStomachCapacity());

  const turtleState = store.getState().turtleMonitor.turtle;

  if (
    turtleState.food.value <= 0 ||
    turtleState.oxygen.value <= 0 ||
    turtleState.life.value <= 0
  ) {
    store.dispatch(stopGame());
    return LevelChangeTypes.GameOver;
  }

  if (mainCharacter.y <= 0) {
    store.dispatch(breath());
  } else {
    store.dispatch(respire());
  }

  if (mainCharacter.x >= bgWidth) {
    return await handleOffBgWidth();
  }

  checkIfTurtleMeetsCharacters();

  Game.instance.level.moveCharacters();

  return LevelChangeTypes.SameLevel;
}

async function handleOffBgWidth(): Promise<LevelChangeTypes> {
  store.dispatch(
    gainPoints({ turtle: { xpValue: Game.instance.level.points } })
  );
  store.dispatch(levelUp());
  if (store.getState().levels.level.value <= levels.length) {
    await Game.instance.loadNewLevel();
    store.dispatch(
      updateDialogContent({
        dialog: {
          title: "Level Up",
          text: [`Welcome to level ${store.getState().levels.level.value}`],
        },
      })
    );
    return LevelChangeTypes.NewLevel;
  } else {
    store.dispatch(stopGame());
    return LevelChangeTypes.GameComplete;
  }
}

function checkIfTurtleMeetsCharacters() {
  const mainCharacter = Game.instance.turtle;
  const level = Game.instance.level;

  for (const character of level.characters) {
    if (areTurtleCharacterIntersecting(mainCharacter, character)) {
      character.handleTurtleCollision();
    }
  }
}

function areTurtleCharacterIntersecting(
  turtle: Turtle,
  otherCharacter: INonMainCharacter
): boolean {
  const collidedWithTurtleRight = (x: number, y: number) => {
    const turtleXEnd = turtle.x + turtle.image.width;
    const turtleYEnd = turtle.y + turtle.image.height;
    return turtle.x <= x && x <= turtleXEnd && turtle.y <= y && y <= turtleYEnd;
  };

  const collidedWithTurtleLeft = (x: number, y: number) => {
    const turtleXEnd = turtle.x - turtle.image.width;
    const turtleYEnd = turtle.y - turtle.image.height;
    return turtle.x >= x && x >= turtleXEnd && turtle.y >= y && y >= turtleYEnd;
  };

  const collidedWithTurtleUp = (x: number, y: number) => {
    const turtleXEnd = turtle.x + turtle.image.height;
    const turtleYEnd = turtle.y - turtle.image.width;
    return turtle.x <= x && x <= turtleXEnd && turtle.y >= y && y >= turtleYEnd;
  };

  const collidedWithTurtleDown = (x: number, y: number) => {
    const turtleXEnd = turtle.x - turtle.image.height;
    const turtleYEnd = turtle.y + turtle.image.width;
    return turtle.x >= x && x >= turtleXEnd && turtle.y <= y && y <= turtleYEnd;
  };

  let isCollision = false;

  switch (turtle.direction) {
    case Directions.Left:
      isCollision =
        collidedWithTurtleLeft(
          otherCharacter.x + otherCharacter.image.width,
          otherCharacter.y
        ) ||
        collidedWithTurtleLeft(
          otherCharacter.x + otherCharacter.image.width,
          otherCharacter.y + otherCharacter.image.height
        );
      break;
    case Directions.Right:
      isCollision =
        collidedWithTurtleRight(otherCharacter.x, otherCharacter.y) ||
        collidedWithTurtleRight(
          otherCharacter.x,
          otherCharacter.y + otherCharacter.image.height
        );
      break;
    case Directions.Up:
      isCollision =
        collidedWithTurtleUp(
          otherCharacter.x,
          otherCharacter.y + otherCharacter.image.height
        ) ||
        collidedWithTurtleUp(
          otherCharacter.x + otherCharacter.image.width,
          otherCharacter.y + otherCharacter.image.height
        );
      break;
    case Directions.Down:
      isCollision =
        collidedWithTurtleDown(otherCharacter.x, otherCharacter.y) ||
        collidedWithTurtleDown(
          otherCharacter.x + otherCharacter.image.width,
          otherCharacter.y
        );
      break;
  }

  return isCollision;
}

export default checkTurtle;
