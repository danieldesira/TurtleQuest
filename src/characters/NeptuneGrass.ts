import BenthicPrey from "./abstract/BenthicPrey";

class NeptuneGrass extends BenthicPrey {
  protected readonly _imageFilename: string = "neptune-grass.png";
  protected readonly _foodValue: number = 5;
  protected readonly _damage: number = 0;
  protected readonly _speed: number = 0;
  protected readonly _stomachImpact: number = 10;
  protected readonly _points: number = 1;
}

export default NeptuneGrass;
