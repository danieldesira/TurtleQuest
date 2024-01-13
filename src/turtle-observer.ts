import Turtle from "./characters/turtle";

interface Options {
  bgWidth: number;
  currentLvl: number;
}

function checkTurtle(mainCharacter: Turtle, options: Options): number {
  if (mainCharacter.getX() === options.bgWidth) {
    options.currentLvl++;
    mainCharacter.resetPosition();
  }
  return options.currentLvl;
}

export default checkTurtle;
