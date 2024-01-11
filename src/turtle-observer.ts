import Turtle from "./characters/turtle";

function observeTurtle(mainCharacter: Turtle, bgWidth: number) {
  if (mainCharacter.getX() === bgWidth) {
    alert("Level complete"); //to-do: level increment logic and reset turtle position
  }
}

export default observeTurtle;
