import Game from "../../Game";
import Directions from "../../enums/Directions";
import ICharacter from "../interfaces/ICharacter";

abstract class Character implements ICharacter {
  protected _x: number;
  protected _y: number;
  protected _image: HTMLImageElement | null;
  protected readonly _baseImagePath: string = "./static/images/characters/";
  protected abstract readonly _imageFilename: string;
  protected abstract readonly _width: number;
  protected abstract readonly _height: number;
  protected _direction: Directions = Directions.Right;

  /**
   * Loads image for character.
   * @returns Promise for loaded image object.
   * @author Daniel Desira
   */
  loadImage(): Promise<void> {
    return new Promise((resolve, reject) => {
      const image = document.createElement("img");
      image.width = this._width;
      image.height = this._height;
      image.src = this._baseImagePath + this._imageFilename;
      image.onload = () => {
        this._image = image;
        resolve();
      };
      image.onerror = () =>
        reject(
          new Error(`Failed to load character image: ${this._imageFilename}`)
        );
    });
  }

  /**
   * Paints the character. Needs to be called after <code>loadImage()</code>.
   * @param context Canvas context.
   * @param bgXOffset Horizontal offset on canvas.
   * @param bgYOffset Vertical offset on canvas.
   * @author Daniel Desira
   */
  paint(
    context: CanvasRenderingContext2D,
    bgXOffset: number = 0,
    bgYOffset: number = 0
  ): void {
    if (this._image) {
      context.drawImage(
        this._image,
        this.x - bgXOffset,
        this.y - bgYOffset,
        this._image.width,
        this._image.height
      );
    }
  }

  get x() {
    return this._x;
  }

  get y() {
    return this._y;
  }

  set x(x: number) {
    this._x = x;
  }

  set y(y: number) {
    this._y = y;
  }

  get image() {
    return this._image;
  }

  get height() {
    return this._height;
  }

  get width() {
    return this._width;
  }

  get direction() {
    return this._direction;
  }

  set direction(direction: Directions) {
    this._direction = direction;
  }

  /**
   * Applies the respective character's rotation. To be called before
   * painting character.
   * @param context The canvas 2D context
   * @author Daniel Desira
   */
  protected applyRotation(context: CanvasRenderingContext2D) {
    const x = this._x - Game.instance.level.bgOffsetX;
    const y = this._y - Game.instance.level.bgOffsetY;
    context.translate(x, y);
    context.rotate(this._direction);
    context.translate(-x, -y);
  }
}

export default Character;
