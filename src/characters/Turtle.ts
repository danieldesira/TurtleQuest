import Game from "../Game";
import Directions from "../enums/Directions";
import Character from "./abstract/Character";
import CharacterOptions from "./interfaces/CharacterOptions";
import IMainCharacter from "./interfaces/IMainCharacter";

class Turtle extends Character implements IMainCharacter {
  static scientificName: string = "Carretta carretta";
  protected readonly _imageFilename: string = "turtle.svg";
  protected readonly _speed: number = 1;
  protected readonly _width: number;
  protected readonly _height: number;

  constructor({ speed, width, height }: CharacterOptions = {}) {
    super();
    this.resetPosition();
    this._speed = speed ?? 1;
    this._width = width ?? 130;
    this._height = height ?? 80;
  }

  resetPosition() {
    this._x = 50;
    this._y = 10;
    this._direction = Directions.Right;
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
    this._direction = angle;
  }

  private applyRotation(context: CanvasRenderingContext2D) {
    const x = this._x - Game.instance.level.bgOffsetX;
    const y = this._y - Game.instance.level.bgOffsetY;
    context.translate(x, y);
    context.rotate(this._direction);
    context.translate(-x, -y);
  }

  paint(context: CanvasRenderingContext2D) {
    this.applyRotation(context);
    context.drawImage(
      this._image,
      this._x - Game.instance.level.bgOffsetX,
      this._y - Game.instance.level.bgOffsetY,
      this._width,
      this._height
    );
    context.resetTransform();
  }
}

export default Turtle;
