import Character from "./Character";

class PlasticBag extends Character {
  protected readonly _isMain: boolean = false;
  protected readonly _isPrey: boolean = false;
  protected readonly _isObstacle: boolean = true;
  protected readonly _isBenthic: boolean = false;
  protected readonly _isSolitary: boolean = true;
  protected readonly _imageFilename: string = "plastic-bag.png";
  protected readonly _foodValue: number = 0;
  protected readonly _damage: number = 8;
  protected readonly _speed: number = 0.1;
  protected readonly _stomachImpact: number = 20;
}

export default PlasticBag;
