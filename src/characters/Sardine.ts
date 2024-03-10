import PackPrey from "./abstract/PackPrey";
import CharacterOptions from "./interfaces/CharacterOptions";

class Sardine extends PackPrey {
  protected readonly _imageFilename: string;
  protected readonly _foodValue: number;
  protected readonly _speed: number;
  protected readonly _stomachImpact: number;
  protected readonly _points: number;

  constructor({
    imageFilename,
    foodValue,
    speed,
    stomachImpact,
    points,
  }: CharacterOptions = {}) {
    super();
    this._imageFilename = imageFilename ?? "sardine.png";
    this._foodValue = foodValue ?? 0.6;
    this._speed = speed ?? 1.3;
    this._stomachImpact = stomachImpact ?? 1;
    this._points = points ?? 10;
  }
}

export default Sardine;
