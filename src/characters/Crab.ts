import BenthicPrey from "./abstract/BenthicPrey";
import CharacterOptions from "./interfaces/CharacterOptions";

class Crab extends BenthicPrey {
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
    this._imageFilename = imageFilename ?? "crab.png";
    this._foodValue = foodValue ?? 20;
    this._speed = speed ?? 0.6;
    this._stomachImpact = stomachImpact ?? 10;
    this._points = points ?? 20;
  }
}

export default Crab;
