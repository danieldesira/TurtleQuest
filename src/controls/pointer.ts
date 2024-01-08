import Turtle from "../characters/turtle";

function handleEvent(event: TouchEvent | PointerEvent, mainCharacter: Turtle) {
  event.preventDefault();
  let x: number;
  let y: number;
  if (event instanceof TouchEvent) {
    const touch = event.touches[0];
    x = touch.pageX;
    y = touch.pageY;
  } else {
    x = event.pageX;
    y = event.pageY;
  }
  if (x < mainCharacter.getX()) {
    mainCharacter.moveLeft();
  }
  if (x > mainCharacter.getX()) {
    mainCharacter.moveRight();
  }
  if (y < mainCharacter.getY()) {
    mainCharacter.moveUp();
  }
  if (y > mainCharacter.getY()) {
    mainCharacter.moveDown();
  }
}

function bindPointer(canvas: HTMLCanvasElement, mainCharacter: Turtle) {
  if (PointerEvent) {
    canvas.addEventListener("pointerdown", (event) =>
      handleEvent(event, mainCharacter)
    );
    canvas.addEventListener("pointermove", (event) =>
      handleEvent(event, mainCharacter)
    );
  } else {
    canvas.addEventListener("touchstart", (event) =>
      handleEvent(event, mainCharacter)
    );
    canvas.addEventListener("touchmove", (event) =>
      handleEvent(event, mainCharacter)
    );
  }
}

export default bindPointer;
