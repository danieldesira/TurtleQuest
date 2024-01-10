import Turtle from "./characters/turtle";

function paintBackground(
  canvas: HTMLCanvasElement,
  context: CanvasRenderingContext2D,
  mainCharacter: Turtle
) {
  const backgroundImage = document.createElement("img");
  backgroundImage.src = "./images/background.png";
  const horizontalSegments = calculateScreenCutOffPoints(
    backgroundImage.width,
    canvas.width
  );
  const verticalSegments = calculateScreenCutOffPoints(
    backgroundImage.height,
    canvas.height
  );
  const x =
    mainCharacter.getX() < canvas.width
      ? 0
      : horizontalSegments[
          Math.floor(backgroundImage.width / mainCharacter.getX()) - 1
        ];
  const y =
    mainCharacter.getY() < canvas.height
      ? 0
      : verticalSegments[
          Math.floor(backgroundImage.height / mainCharacter.getY()) - 1
        ];
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

function calculateScreenCutOffPoints(
  bgSize: number,
  canvasSize: number
): Array<number> {
  const points = [];
  const noOfFits = Math.floor(bgSize / canvasSize);
  for (let i = 1; i < noOfFits; i++) {
    points.push(i * canvasSize);
  }
  points.push(bgSize - noOfFits * canvasSize);
  return points;
}

export default paintBackground;
