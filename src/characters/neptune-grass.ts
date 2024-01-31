import Character from "./character";

class NeptuneGrass extends Character {
  protected readonly _isMain: boolean = false;
  protected readonly _isPrey: boolean = true;
  protected readonly _isObstacle: boolean = false;
  protected readonly _isBenthic: boolean = true;
  protected readonly _imageFilename: string = "neptune-grass.png";
  protected readonly _foodValue: number = 5;
  protected readonly _damage: number = 0;
}

export default NeptuneGrass;
