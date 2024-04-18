import Game from "./Game";
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

/**
 * Fires checks regarding game status and reacts accordingly.
 * @returns Promise to game status.
 * @author Daniel Desira
 */
const checkTurtle = async (): Promise<LevelChangeTypes> => {
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

  Game.instance.level.checkIfTurtleMeetsCharacters();

  Game.instance.level.moveCharacters();

  return LevelChangeTypes.SameLevel;
};

const handleOffBgWidth = async (): Promise<LevelChangeTypes> => {
  store.dispatch(
    gainPoints({ turtle: { xpValue: Game.instance.level.points } })
  );
  store.dispatch(levelUp());
  if (levels.has(store.getState().levels.level.value)) {
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
};

/**
 * Checks for collisions when turtle is facing right direction.
 * @param x Point x to compare.
 * @param y Point y to compare.
 * @returns Flag showing collision.
 * @author Daniel Desira
 */
const collidedWithTurtleRight = (x: number, y: number) => {
  const turtle = Game.instance.turtle;
  const turtleXEnd = turtle.x + turtle.width;
  const turtleYEnd = turtle.y + turtle.height;
  return turtle.x <= x && x <= turtleXEnd && turtle.y <= y && y <= turtleYEnd;
};

/**
 * Checks for collisions when turtle is facing left direction.
 * @param x Point x to compare.
 * @param y Point y to compare.
 * @returns Flag showing collision.
 * @author Daniel Desira
 */
const collidedWithTurtleLeft = (x: number, y: number) => {
  const turtle = Game.instance.turtle;
  const turtleXEnd = turtle.x - turtle.width;
  const turtleYEnd = turtle.y - turtle.height;
  return turtle.x >= x && x >= turtleXEnd && turtle.y >= y && y >= turtleYEnd;
};

/**
 * Checks for collisions when turtle is facing upwards direction.
 * @param x Point x to compare.
 * @param y Point y to compare.
 * @returns Flag showing collision.
 * @author Daniel Desira
 */
const collidedWithTurtleUp = (x: number, y: number) => {
  const turtle = Game.instance.turtle;
  const turtleXEnd = turtle.x + turtle.height;
  const turtleYEnd = turtle.y - turtle.width;
  return turtle.x <= x && x <= turtleXEnd && turtle.y >= y && y >= turtleYEnd;
};

/**
 * Checks for collisions when turtle is facing downwards direction.
 * @param x Point x to compare.
 * @param y Point y to compare.
 * @returns Flag showing collision.
 * @author Daniel Desira
 */
const collidedWithTurtleDown = (x: number, y: number) => {
  const turtle = Game.instance.turtle;
  const turtleXEnd = turtle.x - turtle.height;
  const turtleYEnd = turtle.y + turtle.width;
  return turtle.x >= x && x >= turtleXEnd && turtle.y <= y && y <= turtleYEnd;
};

export default checkTurtle;

export {
  collidedWithTurtleUp,
  collidedWithTurtleDown,
  collidedWithTurtleLeft,
  collidedWithTurtleRight,
};
