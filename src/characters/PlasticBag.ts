import Obstacle from "./abstract/Obstacle";

class PlasticBag extends Obstacle {
  protected readonly _imageFilename: string = "plastic-bag.png";
  protected readonly _damage: number = 8;
  protected readonly _speed: number = 0;
  protected readonly _stomachImpact: number = 20;
  protected readonly _points: number = -20;
}

export default PlasticBag;
