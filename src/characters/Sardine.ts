import Character from "./Character";

class Sardine extends Character {
  protected readonly _isMain: boolean = false;
  protected readonly _isPrey: boolean = true;
  protected readonly _isObstacle: boolean = false;
  protected readonly _isBenthic: boolean = false;
  protected readonly _imageFilename: string = "sardine.png";
  protected readonly _foodValue: number = 0.6;
  protected readonly _damage: number;
}

export default Sardine;