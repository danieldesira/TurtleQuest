import ICharacter from "./icharacter";

abstract class Character implements ICharacter {
  protected _x: number;
  protected _y: number;
  protected readonly abstract _isMain: boolean;
  protected readonly abstract _isPrey: boolean;
  protected readonly abstract _isObstacle: boolean;
  protected readonly abstract _isBenthic: boolean;
  protected _image: HTMLImageElement;
  protected readonly _baseImagePath: string = "./images/characters/";
  protected readonly abstract _imageFilename: string;
  protected readonly abstract _foodValue: number;
  protected readonly abstract _damage: number;

  loadImage(): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
      const image = document.createElement("img");
      image.src = this._baseImagePath + this._imageFilename;
      image.onload = () => {
        this._image = image;
        resolve(image);
      };
      image.onerror = () =>
        reject(
          new Error(`Failed to load character image: ${this._imageFilename}`)
        );
    });
  }

  paint(
    context: CanvasRenderingContext2D,
    bgXOffset: number = 0,
    bgYOffset: number = 0
  ): void {
    context.drawImage(
      this.image,
      this.x - bgXOffset,
      this.y - bgYOffset,
      this.image.width,
      this.image.height
    );
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

  get isMain() {
    return this._isMain;
  }

  get isPrey() {
    return this._isPrey;
  }

  get isObstacle() {
    return this._isObstacle;
  }

  get isBenthic() {
    return this._isBenthic;
  }

  get foodValue() {
    return this._foodValue;
  }

  get damage() {
    return this._damage;
  }

  get image() {
    return this._image;
  }
}

export default Character;
