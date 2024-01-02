import Turtle from "../characters/turtle";

function handleWheel(event: WheelEvent, mainCharacter: Turtle) {
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
}

function bindWheel(canvas: HTMLCanvasElement, mainCharacter: Turtle) {
  canvas.addEventListener("wheel", (event) =>
    handleWheel(event, mainCharacter)
  );
}

export default bindWheel;
