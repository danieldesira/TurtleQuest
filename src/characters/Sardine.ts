import PackPrey from "./abstract/PackPrey";

class Sardine extends PackPrey {
  protected readonly _isSolitary: boolean = false;
  protected readonly _imageFilename: string = "sardine.png";
  protected readonly _foodValue: number = 0.6;
  protected readonly _damage: number = 0;
  protected readonly _speed: number = 1.3;
  protected readonly _stomachImpact: number = 1;
  protected readonly _points: number = 10;
}

export default Sardine;
