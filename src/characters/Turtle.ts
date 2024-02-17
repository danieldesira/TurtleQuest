import Game from "../Game";
import angles from "../constants/angles";
import Character from "./Character";

class Turtle extends Character {
  static scientificName: string = "Carretta carretta";
  protected readonly _isMain: boolean = true;
  protected readonly _isPrey: boolean = false;
  protected readonly _isObstacle: boolean = false;
  protected readonly _isBenthic: boolean;
  protected readonly _isSolitary: boolean = true;
  protected readonly _imageFilename: string = "turtle.png";
  protected readonly _speed: number = 1;
  private _angle: number;
  protected readonly _foodValue: number = 0;
  protected readonly _damage: number = 0;
  protected readonly _stomachImpact: number = 0;
  protected readonly _points: number = 0;

  constructor() {
    super();
    this.resetPosition();
    this._angle = angles.right;
  }

  resetPosition() {
    this._x = 50;
    this._y = 10;
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
      this._x - Game.instance.level.bgOffsetX,
      this._y - Game.instance.level.bgOffsetY,
      this._image.width,
      this._image.height
    );
    context.resetTransform();
  }
}

export default Turtle;
