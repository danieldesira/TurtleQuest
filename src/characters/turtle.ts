import angles from "../constants/angles";
import Character from "./character";

class Turtle extends Character {
  static scientificName: string = "Carretta carretta";
  protected _isMain: boolean = true;
  protected _isFood: boolean = false;
  protected _isObstacle: boolean = false;
  protected _imageFilename: string = "turtle.png"; 

  private angle: number;

  private bgStartX: number;
  private bgStartY: number;
  private limitY: number;
  private static step: number = 3;

  protected _foodValue: number;
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
    this._x = 50;
    this._y = 10;
  }

  resetFoodValue() {
    this._foodValue = 100;
  }

  resetLifeValue() {
    this.lifeValue = 100;
  }

  increaseFoodValue(foodValue: number) {
    this._foodValue += foodValue;
  }

  decreaseFoodValue() {
    this._foodValue -= 0.01;
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
    if (this.y > 0) {
      this._y -= Turtle.step;
    }
  }

  moveDown() {
    if (this.y < this.limitY) {
      this._y += Turtle.step;
    }
  }

  moveLeft() {
    this.rotate(angles.left);
    if (this.x > 0) {
      this._x -= Turtle.step;
    }
  }

  moveRight() {
    this.rotate(angles.right);
    this._x += Turtle.step;
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
    this.applyRotation(context);
    context.drawImage(
      this.image,
      this.x - this.bgStartX,
      this.y - this.bgStartY,
      this.image.width,
      this.image.height
    );
    context.resetTransform();
  }
}

export default Turtle;
