import angles from "../constants/angles";
import Character from "./character";

class Turtle extends Character {
  static scientificName: string = "Carretta carretta";
  protected isMain: boolean = true;
  protected isFood: boolean = false;
  protected isObstacle: boolean = false;
  protected imagePath: string = "./images/turtle.png"; 

  private angle: number;

  private bgStartX: number;
  private bgStartY: number;
  private limitY: number;
  private static step: number = 3;

  private foodValue: number;
  private lifeValue: number;

  constructor() {
    super();
    this.resetPosition();
    this.angle = angles.right;
    this.setBgStart(0, 0);
    this.resetFoodValue();
    this.resetLifeValue();
  }

  resetPosition() {
    this.x = 50;
    this.y = 10;
  }

  resetFoodValue() {
    this.foodValue = 100;
  }

  resetLifeValue() {
    this.lifeValue = 100;
  }

  increaseFoodValue(foodValue: number) {
    this.foodValue += foodValue;
  }

  decreaseFoodValue() {
    this.foodValue -= 0.01;
  }

  applyDamage(damage: number) {
    this.lifeValue -= damage;
  }

  getFoodValue = () => this.foodValue;
  getLifeValue = () => this.lifeValue;

  setBgStart(x: number, y: number) {
    this.bgStartX = x;
    this.bgStartY = y;
  }

  setYLimit(y: number) {
    this.limitY = y;
  }

  moveUp() {
    this.rotate(angles.up);
    if (this.y > 0) {
      this.y -= Turtle.step;
    }
  }

  moveDown() {
    this.rotate(angles.down);
    if (this.y < this.limitY) {
      this.y += Turtle.step;
    }
  }

  moveLeft() {
    this.rotate(angles.left);
    if (this.x > 0) {
      this.x -= Turtle.step;
    }
  }

  moveRight() {
    this.rotate(angles.right);
    this.x += Turtle.step;
  }

  private rotate(angle: number) {
    this.angle = angle;
  }

  private applyRotation(context: CanvasRenderingContext2D) {
    context.translate(this.x, this.y);
    context.rotate(this.angle);
    context.translate(-this.x, -this.y);
  }

  paint(context: CanvasRenderingContext2D) {
    this.applyRotation(context);console.log(`bg start: ${this.bgStartX}, ${this.bgStartY}`)
    context.drawImage(
      this.image,
      this.x - this.bgStartX,
      this.y - this.bgStartY,
      this.image.width / 4,
      this.image.height / 4
    );
    context.resetTransform();
  }
}

export default Turtle;
