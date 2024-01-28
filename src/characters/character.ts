import ICharacter from "./icharacter";

abstract class Character implements ICharacter {
  protected _x: number;
  protected _y: number;
  protected abstract _isMain: boolean;
  protected abstract _isPrey: boolean;
  protected abstract _isObstacle: boolean;
  protected _image: HTMLImageElement;
  protected _baseImagePath: string = "./images/";
  protected abstract _imageFilename: string;
  protected abstract _foodValue: number;

  loadImage(): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
      const image = document.createElement("img");
      image.src = this._baseImagePath + this._imageFilename;
      image.onload = () => {
        this._image = image;
        resolve(image);
      };
      image.onerror = () => reject(new Error(`Failed to load character image: ${this._imageFilename}`));
    });
  }

  abstract paint(context: CanvasRenderingContext2D): void;

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

  get isMain() {
    return this._isMain;
  }

  get isPrey() {
    return this._isPrey;
  }

  get isObstacle() {
    return this._isObstacle;
  }

  get foodValue() {
    return this._foodValue;
  }

  get image() {
    return this._image;
  }
}

export default Character;
