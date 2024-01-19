import Turtle from "./characters/turtle";
import Dialog from "./dialog/dialog";
import levels, { Levels } from "./levels/levels";

interface Options {
  bgWidth: number;
  currentLvl: number;
}

function checkTurtle(mainCharacter: Turtle, options: Options): Levels {
  if (mainCharacter.getX() >= options.bgWidth) {
    options.currentLvl++;
    mainCharacter.resetPosition();
    if (options.currentLvl <= levels.length) {
      Dialog.notify({
        id: "new-level",
        title: "New Level",
        text: [`Welcome to level ${options.currentLvl}`],
      });
      return options.currentLvl as Levels;
    } else {
      return Levels.GameComplete;
    }
  }
  return Levels.SameLevel;
}

export default checkTurtle;
