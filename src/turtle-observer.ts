import Turtle from "./characters/turtle";
import Dialog from "./dialog/dialog";
import levels, { LevelChangeTypes } from "./levels/levels";

interface Options {
  bgWidth: number;
  currentLvl: number;
}

interface ReturnValue {
  levelChangeType: LevelChangeTypes;
  newLevel?: number;
}

function checkTurtle(mainCharacter: Turtle, options: Options): ReturnValue {
  if (mainCharacter.getX() >= options.bgWidth) {
    options.currentLvl++;
    mainCharacter.resetPosition();
    if (options.currentLvl <= levels.length) {
      Dialog.notify({
        id: "new-level",
        title: "New Level",
        text: [`Welcome to level ${options.currentLvl}`],
      });
      return {
        levelChangeType: LevelChangeTypes.NewLevel,
        newLevel: options.currentLvl,
      };
    } else {
      return { levelChangeType: LevelChangeTypes.GameComplete };
    }
  }
  return { levelChangeType: LevelChangeTypes.SameLevel };
}

export default checkTurtle;
