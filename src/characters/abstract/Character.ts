import Game from "../../Game";
import {
  decrementStomachCapacity,
  gainPoints,
} from "../../features/turtleMonitor/turtleReducers";
import store from "../../store";
import ICharacter from "../interfaces/ICharacter";

abstract class Character implements ICharacter {
  protected _x: number;
  protected _y: number;
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
    const randomVeriticalDirection = Math.round(Math.random());
    const randomHorizontalDirection = Math.round(Math.random());
    const randomSpeed = this._speed / 3;
    this._y += randomVeriticalDirection ? randomSpeed : -randomSpeed;
    this._x += randomHorizontalDirection ? randomSpeed : -randomSpeed;
  }

  handleTurtleCollision(): void {
    store.dispatch(
      decrementStomachCapacity({
        turtle: { stomachValue: this._stomachImpact },
      })
    );
    store.dispatch(gainPoints({ turtle: { xpValue: this._points } }));
    Game.instance.level.characters.delete(this);
  }

  setInitialPosition(options: {
    xFrom: number;
    xTo: number;
    yFrom: number;
    yTo: number;
  }): void {
    this._x = Math.random() * (options.xTo - options.xFrom) + options.xFrom;
    this._y = Math.random() * (options.yTo - options.yFrom) + options.yFrom;
  }
}

export default Character;
