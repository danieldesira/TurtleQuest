import Character from "./Character";

class Shrimp extends Character {
  protected readonly _isMain: boolean = false;
  protected readonly _isPrey: boolean = true;
  protected readonly _isObstacle: boolean = false;
  protected readonly _isBenthic: boolean = false;
  protected readonly _imageFilename: string = "shrimp.png";
  protected readonly _foodValue: number = 0.01;
  protected readonly _damage: number = 0;
  protected readonly _speed: number = 0.6;
}

export default Shrimp;
