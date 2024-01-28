import ICharacter from "./icharacter";

abstract class Character implements ICharacter {
  protected _x: number;
  protected _y: number;
  protected abstract _isMain: boolean;
  protected abstract _isFood: boolean;
  protected abstract _isObstacle: boolean;
  protected _image: HTMLImageElement;
  protected abstract _imagePath: string;
  protected abstract _foodValue: number;

  loadImage(): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
      const image = document.createElement("img");
      image.src = this._imagePath;
      image.onload = () => {
        this._image = image;
        resolve(image);
      };
      image.onerror = () => reject(new Error("Failed to load character image"));
    });
  }

  abstract paint(context: CanvasRenderingContext2D): void;

  get x() {
    return this._x;
  }

  get y() {
    return this._y;
  }

  get isMain() {
    return this._isMain;
  }

  get isFood() {
    return this._isFood;
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

  setPosition(x: number, y: number): void {
    this._x = x;
    this._y = y;
  }
}

export default Character;
