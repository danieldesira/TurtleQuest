import BenthicPrey from "./abstract/BenthicPrey";
import CharacterOptions from "./interfaces/CharacterOptions";

class Crab extends BenthicPrey {
  protected readonly _imageFilename: string;
  protected readonly _foodValue: number;
  protected readonly _speed: number;
  protected readonly _stomachImpact: number;
  protected readonly _points: number;
  protected readonly _width: number;
  protected readonly _height: number;

  constructor({
    imageFilename,
    foodValue,
    speed,
    stomachImpact,
    points,
    width,
    height,
  }: CharacterOptions = {}) {
    super();
    this._imageFilename = imageFilename ?? "crab.png";
    this._foodValue = foodValue ?? 20;
    this._speed = speed ?? 0.6;
    this._stomachImpact = stomachImpact ?? 10;
    this._points = points ?? 20;
    this._width = width ?? 10;
    this._height = height ?? 10;
  }
}

export default Crab;
