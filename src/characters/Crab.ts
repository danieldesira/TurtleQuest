import BenthicPrey from "./abstract/BenthicPrey";

class Crab extends BenthicPrey {
  protected readonly _imageFilename: string = "crab.png";
  protected readonly _foodValue: number = 20;
  protected readonly _speed: number = 0.6;
  protected readonly _stomachImpact: number = 10;
  protected readonly _points: number = 20;
}

export default Crab;
