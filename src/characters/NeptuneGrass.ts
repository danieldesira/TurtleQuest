import Character from "./Character";

class NeptuneGrass extends Character {
  protected readonly _isMain: boolean = false;
  protected readonly _isPrey: boolean = true;
  protected readonly _isObstacle: boolean = false;
  protected readonly _isBenthic: boolean = true;
  protected readonly _isSolitary: boolean = false;
  protected readonly _imageFilename: string = "neptune-grass.png";
  protected readonly _foodValue: number = 5;
  protected readonly _damage: number = 0;
  protected readonly _speed: number = 0;
  protected readonly _stomachImpact: number = 10;
  protected readonly _points: number = 1;
}

export default NeptuneGrass;
