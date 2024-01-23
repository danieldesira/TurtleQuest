import Character from "./character";

class Shrimp extends Character {
  protected isMain: boolean = false;
  protected isFood: boolean = true;
  protected isObstacle: boolean = false;
  protected imagePath: string = "./images/shrimp.png";

  private foodValue: number = 0.01;

  getFoodValue = () => this.foodValue;

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
