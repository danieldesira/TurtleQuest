import Turtle from "./characters/turtle";
import ILevel from "./levels/ilevel";

interface Options {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  mainCharacter: Turtle;
  level: ILevel;
}

class Background {
  static paint(backgroundImage: HTMLImageElement, options: Options) {
    const horizontalSegments = Background.calculateScreenCutOffPoints(
      backgroundImage.width,
      options.canvas.width
    );
    const verticalSegments = Background.calculateScreenCutOffPoints(
      backgroundImage.height,
      options.canvas.height
    );
    const x =
      options.mainCharacter.x < options.canvas.width
        ? 0
        : horizontalSegments[
            Math.floor(backgroundImage.width / options.mainCharacter.x) - 1
          ];
    const y =
      options.mainCharacter.y < options.canvas.height
        ? 0
        : verticalSegments[
            Math.floor(backgroundImage.height / options.mainCharacter.y) -
              1
          ];
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
    options.mainCharacter.setBgStart(x, y);
    options.level.setBgOffset(x, y);
  }

  private static calculateScreenCutOffPoints(
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

  static readjustCanvasForBg(
    canvas: HTMLCanvasElement,
    bgImg: HTMLImageElement
  ) {
    if (bgImg.height < canvas.height) {
      canvas.height = bgImg.height;
    }
    if (bgImg.width < canvas.width) {
      canvas.width = bgImg.width;
    }
  }
}

export default Background;