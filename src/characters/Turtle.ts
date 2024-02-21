import Game from "../Game";
import directions from "../constants/directions";
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
    this._angle = directions.right;
  }

  resetPosition() {
    this._x = 50;
    this._y = 10;
  }

  get direction() {
    return this._angle;
  }

  moveUp() {
    this.rotate(directions.up);
    if (this._y > 0) {
      this._y -= this._speed;
    }
  }

  moveDown() {
    this.rotate(directions.down);
    if (this._y < Game.instance.level.bgImg.height) {
      this._y += this._speed;
    }
  }

  moveLeft() {
    this.rotate(directions.left);
    if (this._x > 0) {
      this._x -= this._speed;
    }
  }

  moveRight() {
    this.rotate(directions.right);
    this._x += this._speed;
  }

  private rotate(angle: number) {
    this._angle = angle;
  }

  private applyRotation(context: CanvasRenderingContext2D) {
    const x = this._x - Game.instance.level.bgOffsetX;
    const y = this._y - Game.instance.level.bgOffsetY;
    context.translate(x, y);
    context.rotate(this._angle);
    context.translate(-x, -y);
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
