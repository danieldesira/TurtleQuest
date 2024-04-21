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

  /**
   * Resets position and direction for turtle.
   * @author Daniel Desira
   */
  resetPosition() {
    this._x = 50;
    this._y = 10;
    this._direction = Directions.Right;
  }

  /**
   * Decrements turtle y position and rotates it upwards.
   * @author Daniel Desira
   */
  moveUp() {
    this._direction = Directions.Up;
    if (this._y > 0) {
      this._y -= this._speed;
    }
  }

  /**
   * Increments turtle y position and rotates it downwards.
   * @author Daniel Desira
   */
  moveDown() {
    this._direction = Directions.Down;
    if (this._y < Game.instance.level.bgImg.height) {
      this._y += this._speed;
    }
  }

  /**
   * Decrements turtle x position and rotates it leftwards.
   * @author Daniel Desira
   */
  moveLeft() {
    this._direction = Directions.Left;
    if (this._x > 0) {
      this._x -= this._speed;
    }
  }

  /**
   * Increments turtle x position and rotates it rightwards.
   * @author Daniel Desira
   */
  moveRight() {
    this._direction = Directions.Right;
    this._x += this._speed;
  }

  /**
   * Paints turtle while taking direction into account.
   * @param context The canvas 2D context
   * @override
   * @author Daniel Desira
   */
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
