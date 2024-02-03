import Turtle from "../characters/turtle";

const handleWheel = (event: React.WheelEvent, mainCharacter: Turtle) => {
  event.preventDefault();
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
