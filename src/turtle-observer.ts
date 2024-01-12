import Turtle from "./characters/turtle";

interface Options {
  bgWidth: number;
  currentLvl: number;
}

function observeTurtle(mainCharacter: Turtle, options: Options) {
  if (mainCharacter.getX() === options.bgWidth) {
    options.currentLvl++;
  }
}

export default observeTurtle;
