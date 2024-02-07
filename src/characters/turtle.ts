import Game from "../Game";
import angles from "../constants/angles";
import Character from "./Character";

class Turtle extends Character {
  static scientificName: string = "Carretta carretta";
  protected readonly _isMain: boolean = true;
  protected readonly _isPrey: boolean = false;
  protected readonly _isObstacle: boolean = false;
  protected readonly _isBenthic: boolean;
  protected readonly _imageFilename: string = "turtle.png";

  private _angle: number;

  private _bgStartX: number;
  private _bgStartY: number;
  protected readonly _speed: number = 1;

  protected _foodValue: number;
  private _lifeValue: number;
  private _oxygenValue: number;
  protected _damage: number; 

  constructor() {
    super();
    this.resetPosition();
    this._angle = angles.right;
    this._bgStartX = 0;
    this._bgStartY = 0;
    this.reset();
  }

  resetPosition() {
    this._x = 50;
    this._y = 10;
  }

  reset() {
    this._foodValue = 100;
    this._lifeValue = 100;
    this._oxygenValue = 100;
  }

  increaseFoodValue(foodValue: number) {
    this._foodValue += foodValue;
  }

  decreaseFoodValue() {
    this._foodValue -= 0.005;
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

  get direction() {
    return this._angle;
  }

  moveUp() {
    if (this._y > 0) {
      this._y -= this._speed;
    }
  }

  moveDown() {
    if (this._y < Game.instance.level.bgImg.height) {
      this._y += this._speed;
    }
  }

  moveLeft() {
    this.rotate(angles.left);
    if (this._x > 0) {
      this._x -= this._speed;
    }
  }

  moveRight() {
    this.rotate(angles.right);
    this._x += this._speed;
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
