import Game from "./Game";
import ICharacter from "./characters/ICharacter";
import Turtle from "./characters/Turtle";
import angles from "./constants/angles";
import Dialog from "./dialog/dialog";
import levels, { LevelChangeTypes } from "./levels/levels";

async function checkTurtle(): Promise<LevelChangeTypes> {
  const mainCharacter = Game.instance.turtle;
  const bgWidth = Game.instance.level.bgImg.width;

  mainCharacter.decreaseFoodValue();

  if (
    mainCharacter.foodValue <= 0 ||
    mainCharacter.oxygenValue <= 0 ||
    mainCharacter.lifeValue <= 0
  ) {
    return LevelChangeTypes.GameOver;
  }

  if (mainCharacter.y <= 0) {
    mainCharacter.breath();
  } else {
    mainCharacter.useOxygen();
  }

  if (mainCharacter.x >= bgWidth) {
    return await handleOffBgWidth();
  }

  checkIfTurtleMeetsCharacters();

  for (const character of Game.instance.level.characters) {
    character.swim();
  }

  return LevelChangeTypes.SameLevel;
}

async function handleOffBgWidth(): Promise<LevelChangeTypes> {
  Game.instance.incrementLevel();
  Game.instance.turtle.resetPosition();
  if (Game.instance.levelNo <= levels.length) {
    await Game.instance.loadNewLevel();
    Dialog.notify({
      id: "new-level",
      title: "New Level",
      text: [`Welcome to level ${Game.instance.levelNo}`],
    });
    return LevelChangeTypes.NewLevel;
  } else {
    return LevelChangeTypes.GameComplete;
  }
}

function checkIfTurtleMeetsCharacters() {
  const mainCharacter = Game.instance.turtle;
  const level = Game.instance.level;
  for (const character of level.characters) {
    if (areTurtleCharacterIntersecting(mainCharacter, character)) {
      if (character.isPrey) {
        mainCharacter.increaseFoodValue(character.foodValue);
        level.characters.delete(character);
      } else if (character.isObstacle) {
        mainCharacter.applyDamage(character.damage);
        level.characters.delete(character);
      }
    }
  }
}

function areTurtleCharacterIntersecting(
  turtle: Turtle,
  otherCharacter: ICharacter
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

  let isCollision = false;

  if (turtle.direction === angles.left) {
    isCollision =
      collidedWithTurtleLeft(
        otherCharacter.x + otherCharacter.image.width,
        otherCharacter.y
      ) ||
      collidedWithTurtleLeft(
        otherCharacter.x + otherCharacter.image.width,
        otherCharacter.y + otherCharacter.image.height
      );
  } else {
    isCollision =
      collidedWithTurtleRight(otherCharacter.x, otherCharacter.y) ||
      collidedWithTurtleRight(
        otherCharacter.x,
        otherCharacter.y + otherCharacter.image.height
      );
  }

  return isCollision;
}

export default checkTurtle;
