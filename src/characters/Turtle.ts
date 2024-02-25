import Game from "../Game";
import Directions from "../enums/Directions";
import Character from "./abstract/Character";
import IMainCharacter from "./interfaces/IMainCharacter";

class Turtle extends Character implements IMainCharacter {
  static scientificName: string = "Carretta carretta";
  protected readonly _isSolitary: boolean = true;
  protected readonly _imageFilename: string = "turtle.png";
  protected readonly _speed: number = 1;
  private _angle: Directions;
  protected readonly _foodValue: number = 0;
  protected readonly _damage: number = 0;
  protected readonly _stomachImpact: number = 0;
  protected readonly _points: number = 0;

  constructor() {
    super();
    this.resetPosition();
    this._angle = Directions.Right;
  }

  resetPosition() {
    this._x = 50;
    this._y = 10;
  }

  get direction() {
    return this._angle;
  }

  moveUp() {
    this.rotate(Directions.Up);
    if (this._y > 0) {
      this._y -= this._speed;
    }
  }

  moveDown() {
    this.rotate(Directions.Down);
    if (this._y < Game.instance.level.bgImg.height) {
      this._y += this._speed;
    }
  }

  moveLeft() {
    this.rotate(Directions.Left);
    if (this._x > 0) {
      this._x -= this._speed;
    }
  }

  moveRight() {
    this.rotate(Directions.Right);
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
