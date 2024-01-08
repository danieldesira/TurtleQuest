import Turtle from "./characters/turtle";

function paintBackground(
  canvas: HTMLCanvasElement,
  context: CanvasRenderingContext2D,
  mainCharacter: Turtle
) {
  const backgroundImage = document.createElement("img");
  backgroundImage.src = "./images/background.png";
  const x =
    mainCharacter.getX() < canvas.width
      ? 0
      : backgroundImage.width - mainCharacter.getX();
  const y =
    mainCharacter.getY() < canvas.height
      ? 0
      : backgroundImage.height - mainCharacter.getY();
  backgroundImage.onload = () =>
    context.drawImage(
      backgroundImage,
      x,
      y,
      canvas.width,
      canvas.height,
      0,
      0,
      canvas.width,
      canvas.height
    );
  return backgroundImage;
}

export default paintBackground;
