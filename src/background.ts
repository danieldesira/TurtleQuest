import Game from "./Game";

interface Options {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
}

class Background {
  static paint(options: Options) {
    const backgroundImage = Game.instance.level.bgImg;
    const horizontalSegments = Background.calculateScreenCutOffPoints(
      backgroundImage.width,
      options.canvas.width
    );
    const verticalSegments = Background.calculateScreenCutOffPoints(
      backgroundImage.height,
      options.canvas.height
    );
    const x =
      Game.instance.turtle.x < options.canvas.width
        ? 0
        : horizontalSegments[
            Math.floor(backgroundImage.width / Game.instance.turtle.x) - 1
          ];
    const y =
      Game.instance.turtle.y < options.canvas.height
        ? 0
        : verticalSegments[
            Math.floor(backgroundImage.height / Game.instance.turtle.y) - 1
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
    Background.updateBgRelatedProperties(x, y);
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

  static readjustCanvasForBg(canvas: HTMLCanvasElement) {
    const bgImg = Game.instance.level.bgImg;
    if (bgImg.height < canvas.height) {
      canvas.height = bgImg.height;
    }
    if (bgImg.width < canvas.width) {
      canvas.width = bgImg.width;
    }
  }

  private static updateBgRelatedProperties(
    x: number,
    y: number
  ) {
    Game.instance.turtle.bgStartX = x;
    Game.instance.turtle.bgStartY = y;
    Game.instance.level.bgOffsetX = x;
    Game.instance.level.bgOffsetY = y;
  }
}

export default Background;
