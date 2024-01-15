import Turtle from "./characters/turtle";
import Dialog from "./dialog/dialog";
import levels from "./levels/levels";

interface Options {
  bgWidth: number;
  currentLvl: number;
}

function checkTurtle(mainCharacter: Turtle, options: Options): number {
  if (mainCharacter.getX() >= options.bgWidth) {
    options.currentLvl++;
    mainCharacter.resetPosition();
    if (options.currentLvl <= levels.length) {
      Dialog.notify({
        id: "new-level",
        title: "New Level",
        text: [`Welcome to level ${options.currentLvl}`],
      });
    }
  }
  return options.currentLvl;
}

export default checkTurtle;
