import FloatingGuidedObstacle from "./abstract/FloatingGuidedObstacle";
import CharacterOptions from "./interfaces/CharacterOptions";

class Boat extends FloatingGuidedObstacle {
  protected readonly _damage: number;
  protected readonly _speed: number;
  protected readonly _stomachImpact: number;
  protected readonly _points: number;
  protected readonly _imageFilename: string;
  protected readonly _width: number;
  protected readonly _height: number;

  constructor({
    damage,
    speed,
    stomachImpact,
    points,
    imageFilename,
    width,
    height,
  }: CharacterOptions = {}) {
    super();
    this._damage = damage ?? 100;
    this._speed = speed ?? 3;
    this._stomachImpact = stomachImpact ?? 0;
    this._points = points ?? -50;
    this._imageFilename = imageFilename ?? "boat.svg";
    this._width = width ?? 300;
    this._height = height ?? 100;
  }
}

export default Boat;
