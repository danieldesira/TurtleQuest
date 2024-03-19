import BenthicPrey from "./abstract/BenthicPrey";
import CharacterOptions from "./interfaces/CharacterOptions";

class NeptuneGrass extends BenthicPrey {
  protected readonly _imageFilename: string;
  protected readonly _foodValue: number;
  protected readonly _speed: number = 0;
  protected readonly _stomachImpact: number;
  protected readonly _points: number;
  protected readonly _width: number;
  protected readonly _height: number;

  constructor({
    imageFilename,
    foodValue,
    stomachImpact,
    points,
    width,
    height,
  }: CharacterOptions = {}) {
    super();
    this._imageFilename = imageFilename ?? "neptune-grass.png";
    this._foodValue = foodValue ?? 5;
    this._stomachImpact = stomachImpact ?? 10;
    this._points = points ?? 1;
    this._width = width ?? 35;
    this._height = height ?? 20;
  }
}

export default NeptuneGrass;
