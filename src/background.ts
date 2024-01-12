import Turtle from "./characters/turtle";
import Level from "./levels/level";

interface Options {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  mainCharacter: Turtle;
  level: Level;
}

function paintBackground(options: Options) {
  const backgroundImage = document.createElement("img");
  backgroundImage.src = options.level.getBgImg();
  const horizontalSegments = calculateScreenCutOffPoints(
    backgroundImage.width,
    options.canvas.width
  );
  const verticalSegments = calculateScreenCutOffPoints(
    backgroundImage.height,
    options.canvas.height
  );
  const x =
    options.mainCharacter.getX() < options.canvas.width
      ? 0
      : horizontalSegments[
          Math.floor(backgroundImage.width / options.mainCharacter.getX()) - 1
        ];
  const y =
    options.mainCharacter.getY() < options.canvas.height
      ? 0
      : verticalSegments[
          Math.floor(backgroundImage.height / options.mainCharacter.getY()) - 1
        ];
  backgroundImage.onload = () =>
    options.context.drawImage(
      backgroundImage,
      x,
      y,
      options.canvas.width,
      options.canvas.height,
      0,
      0,
      options.canvas.width,
      options.canvas.height
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
