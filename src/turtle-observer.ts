import Background from "./background";
import Turtle from "./characters/turtle";
import Dialog from "./dialog/dialog";
import Level from "./levels/level";
import selectLvl from "./levels/level-selector";
import levels from "./levels/levels";

interface Options {
  bgWidth: number;
  currentLvl: number;
}

async function checkTurtle(mainCharacter: Turtle, options: Options): Promise<HTMLImageElement> {
  if (mainCharacter.getX() >= options.bgWidth) {
    options.currentLvl++;
    mainCharacter.resetPosition();
    if (options.currentLvl <= levels.length) {
      Dialog.notify({
        id: "new-level",
        title: "New Level",
        text: [`Welcome to level ${options.currentLvl}`],
      });
      const level = selectLvl(options.currentLvl) as Level;
      const background = await Background.load({ level });
      return background;
    }
  }
  return null;
}

export default checkTurtle;
