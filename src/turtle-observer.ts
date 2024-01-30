import ICharacter from "./characters/icharacter";
import Turtle from "./characters/turtle";
import Dialog from "./dialog/dialog";
import ILevel from "./levels/ilevel";
import levels, { LevelChangeTypes } from "./levels/levels";

interface Options {
  bgWidth: number;
  levelNo: number;
  level: ILevel;
}

interface ReturnValue {
  levelChangeType: LevelChangeTypes;
  newLevel?: number;
}

function checkTurtle(mainCharacter: Turtle, options: Options): ReturnValue {
  mainCharacter.decreaseFoodValue();
  
  if (mainCharacter.foodValue <= 0 || mainCharacter.oxygenValue <= 0 || mainCharacter.lifeValue <= 0) {
    return { levelChangeType: LevelChangeTypes.GameOver };
  }

  if (mainCharacter.y <= 0) {
    mainCharacter.breath();
  } else {
    mainCharacter.useOxygen();
  }

  if (mainCharacter.x >= options.bgWidth) {
    return handleOffBgWidth(mainCharacter, options);
  }

  checkIfTurtleMeetsCharacters(mainCharacter, options.level);

  return { levelChangeType: LevelChangeTypes.SameLevel };
}

function handleOffBgWidth(
  mainCharacter: Turtle,
  options: Options
): ReturnValue {
  options.levelNo++;
  mainCharacter.resetPosition();
  if (options.levelNo <= levels.length) {
    Dialog.notify({
      id: "new-level",
      title: "New Level",
      text: [`Welcome to level ${options.levelNo}`],
    });
    return {
      levelChangeType: LevelChangeTypes.NewLevel,
      newLevel: options.levelNo,
    };
  } else {
    return { levelChangeType: LevelChangeTypes.GameComplete };
  }
}

function checkIfTurtleMeetsCharacters(mainCharacter: Turtle, level: ILevel) {
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
  const turtleXEnd = turtle.x + turtle.image.width;
  const turtleYEnd = turtle.y + turtle.image.height;
  return (
    turtle.x <= otherCharacter.x &&
    otherCharacter.x <= turtleXEnd &&
    turtle.y <= otherCharacter.y &&
    otherCharacter.y <= turtleYEnd
  );
}

export default checkTurtle;
