import Character from "./character";

class PlasticBag extends Character {
  protected _isMain: boolean = false;
  protected _isPrey: boolean = false;
  protected _isObstacle: boolean = true;
  protected _imageFilename: string = "plastic-bag.png";
  protected _foodValue: number;
  protected _damage: number = 8;

  paint(
    context: CanvasRenderingContext2D,
    bgXOffset: number = 0,
    bgYOffset: number = 0
  ): void {
    context.drawImage(
      this.image,
      this.x - bgXOffset,
      this.y - bgYOffset,
      this.image.width,
      this.image.height
    );
  }
}

export default PlasticBag;
