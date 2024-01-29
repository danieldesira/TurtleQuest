import angles from "../constants/angles";
import Character from "./character";

class Turtle extends Character {
  static scientificName: string = "Carretta carretta";
  protected _isMain: boolean = true;
  protected _isPrey: boolean = false;
  protected _isObstacle: boolean = false;
  protected _imageFilename: string = "turtle.png";

  private _angle: number;

  private _bgStartX: number;
  private _bgStartY: number;
  private _limitY: number;
  private static _step: number = 3;

  protected _foodValue: number;
  private _lifeValue: number;
  private _oxygenValue: number;

  constructor() {
    super();
    this.resetPosition();
    this._angle = angles.right;
    this._bgStartX = 0;
    this._bgStartY = 0;
    this.resetFoodValue();
    this.resetLifeValue();
    this._oxygenValue = 100;
  }

  resetPosition() {
    this._x = 50;
    this._y = 10;
  }

  resetFoodValue() {
    this._foodValue = 100;
  }

  resetLifeValue() {
    this._lifeValue = 100;
  }

  increaseFoodValue(foodValue: number) {
    this._foodValue += foodValue;
  }

  decreaseFoodValue() {
    this._foodValue -= 0.01;
  }

  breath() {
    this._oxygenValue += 0.5;
  }

  useOxygen() {
    this._oxygenValue -= 0.001;
  }

  applyDamage(damage: number) {
    this._lifeValue -= damage;
  }

  get lifeValue() {
    return this._lifeValue;
  }

  get oxygenValue() {
    return this._oxygenValue;
  }

  set bgStartX(x: number) {
    this._bgStartX = x;
  }

  set bgStartY(y: number) {
    this._bgStartY = y;
  }

  set limitY(y: number) {
    this._limitY = y;
  }

  moveUp() {
    if (this._y > 0) {
      this._y -= Turtle._step;
    }
  }

  moveDown() {
    if (this._y < this._limitY) {
      this._y += Turtle._step;
    }
  }

  moveLeft() {
    this.rotate(angles.left);
    if (this._x > 0) {
      this._x -= Turtle._step;
    }
  }

  moveRight() {
    this.rotate(angles.right);
    this._x += Turtle._step;
  }

  private rotate(angle: number) {
    this._angle = angle;
  }

  private applyRotation(context: CanvasRenderingContext2D) {
    context.translate(this._x, this._y);
    context.rotate(this._angle);
    context.translate(-this._x, -this._y);
  }

  paint(context: CanvasRenderingContext2D) {
    this.applyRotation(context);
    context.drawImage(
      this._image,
      this._x - this._bgStartX,
      this._y - this._bgStartY,
      this._image.width,
      this._image.height
    );
    context.resetTransform();
  }
}

export default Turtle;
