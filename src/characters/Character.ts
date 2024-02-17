import Game from "../Game";
import angles from "../constants/angles";
import ICharacter from "./ICharacter";

abstract class Character implements ICharacter {
  protected _x: number;
  protected _y: number;
  protected abstract readonly _isMain: boolean;
  protected abstract readonly _isPrey: boolean;
  protected abstract readonly _isObstacle: boolean;
  protected abstract readonly _isBenthic: boolean;
  protected abstract readonly _isSolitary: boolean;
  protected _image: HTMLImageElement;
  protected readonly _baseImagePath: string = "./images/characters/";
  protected abstract readonly _imageFilename: string;
  protected abstract readonly _foodValue: number;
  protected abstract readonly _damage: number;
  protected abstract readonly _speed: number;
  protected abstract readonly _stomachImpact: number;
  protected abstract readonly _points: number;

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

  get isSolitary() {
    return this._isSolitary;
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

  get stomachImpact() {
    return this._stomachImpact;
  }

  get points() {
    return this._points;
  }

  swim(): void {
    if (this._isPrey) {
      const maxPreyDistance = 50;
      const turtle = Game.instance.turtle;
      const horizontalDistance = Math.abs(turtle._x - this._x);
      const verticalDistance = Math.abs(turtle._y - this._y);
      if (
        horizontalDistance < maxPreyDistance &&
        verticalDistance < maxPreyDistance
      ) {
        console.log(
          `Turtle position: ${turtle._x}, ${turtle._y}\nPrey position: ${this._x}, ${this._y}`
        );
        if (turtle.direction === angles.left) {
          this._x -= this._speed;
        } else {
          this._x += this._speed;
        }
      }
    }

    if (this._isObstacle) {
      this._x -= this._speed;
    }

    const randomVeriticalDirection = Math.round(Math.random());
    const randomHorizontalDirection = Math.round(Math.random());
    const randomSpeed = this._speed / 3;
    this._y += randomVeriticalDirection ? randomSpeed : -randomSpeed;
    this._x += randomHorizontalDirection ? randomSpeed : -randomSpeed;
  }
}

export default Character;
