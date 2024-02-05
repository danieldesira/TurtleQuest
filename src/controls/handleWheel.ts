import Game from "../Game";
import Turtle from "../characters/Turtle";

const handleWheel = (event: React.WheelEvent) => {
  event.preventDefault();

  const mainCharacter = Game.instance.turtle;

  if (event.deltaX < 0) {
    mainCharacter.moveLeft();
  }
  if (event.deltaX > 0) {
    mainCharacter.moveRight();
  }
  if (event.deltaY < 0) {
    mainCharacter.moveUp();
  }
  if (event.deltaY > 0) {
    mainCharacter.moveDown();
  }
};

export default handleWheel;
