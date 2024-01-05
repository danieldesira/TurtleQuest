import Turtle from "../characters/turtle";

function handleTouchMove(event: TouchEvent, mainCharacter: Turtle) {
  event.preventDefault();
  const touch = event.touches[0];
  if (touch.pageX < mainCharacter.getX()) {
    mainCharacter.moveLeft();
  }
  if (touch.pageX > mainCharacter.getX()) {
    mainCharacter.moveRight();
  }
  if (touch.pageY < mainCharacter.getY()) {
    mainCharacter.moveDown();
  }
  if (touch.pageY > mainCharacter.getY()) {
    mainCharacter.moveUp();
  }
}

function bindTouch(canvas: HTMLCanvasElement, mainCharacter: Turtle) {
  canvas.addEventListener("touchmove", (event) =>
    handleTouchMove(event, mainCharacter)
  );
}

export default bindTouch;
