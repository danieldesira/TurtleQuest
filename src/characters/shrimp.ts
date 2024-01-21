import Character from "./character";

class Shrimp extends Character {
  protected isMain: boolean = false;
  protected isFood: boolean = true;
  protected isObstacle: boolean = false;

  private foodValue: number = 0.01;

  getFoodValue = () => this.foodValue;

  paint(context: CanvasRenderingContext2D): void {
    throw new Error("Method not implemented.");
  }
}

export default Shrimp;
