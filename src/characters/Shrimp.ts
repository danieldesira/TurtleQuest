import Prey from "./abstract/Prey";

class Shrimp extends Prey {
  protected readonly _imageFilename: string = "shrimp.png";
  protected readonly _foodValue: number = 0.01;
  protected readonly _speed: number = 0.6;
  protected readonly _stomachImpact: number = 0.05;
  protected readonly _points: number = 4;
}

export default Shrimp;
