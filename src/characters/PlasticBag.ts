import Obstacle from "./abstract/Obstacle";
import CharacterOptions from "./interfaces/CharacterOptions";

class PlasticBag extends Obstacle {
  protected readonly _imageFilename: string;
  protected readonly _damage: number;
  protected readonly _speed: number;
  protected readonly _stomachImpact: number;
  protected readonly _points: number;

  constructor({
    imageFilename,
    damage,
    stomachImpact,
    points,
  }: CharacterOptions = {}) {
    super();
    this._imageFilename = imageFilename ?? "plastic-bag.png";
    this._damage = damage ?? 8;
    this._stomachImpact = stomachImpact ?? 20;
    this._points = points ?? -20;
  }
}

export default PlasticBag;
