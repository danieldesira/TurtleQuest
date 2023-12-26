import Turtle from "../characters/turtle";

function handleMouseMove(
  event: MouseEvent,
  mainCharacter: Turtle,
  canvas: HTMLCanvasElement
) {
  const x = event.pageX - canvas.offsetLeft;
  const y = event.pageY - canvas.offsetTop;
  mainCharacter.setPosition(x, y);
}

function bindMouse(canvas: HTMLCanvasElement, mainCharacter: Turtle) {
  canvas.addEventListener("mousemove", (event: MouseEvent) =>
    handleMouseMove(event, mainCharacter, canvas)
  );
}

export default bindMouse;
