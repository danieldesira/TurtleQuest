import Character from "./character";

class Shrimp extends Character {
  protected _isMain: boolean = false;
  protected _isPrey: boolean = true;
  protected _isObstacle: boolean = false;
  protected _imageFilename: string = "shrimp.png";

  protected _foodValue: number = 0.01;

  paint(context: CanvasRenderingContext2D, bgXOffset: number = 0, bgYOffset: number = 0): void {
    context.drawImage(
      this.image,
      this.x - bgXOffset,
      this.y - bgYOffset,
      this.image.width,
      this.image.height
    );
  }
}

export default Shrimp;
