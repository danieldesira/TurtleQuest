import Game from "../../Game";
import Directions from "../../enums/Directions";
import { generateRandomBit } from "../../utils/generic";
import Obstacle from "./Obstacle";

abstract class FloatingGuidedObstacle extends Obstacle {
  private _direction: Directions;

  setInitialPosition(): void {
    this._x =
      Math.random() * (this.initialPositionXTo - this.initialPositionXFrom) +
      this.initialPositionXFrom;
    this._y = 0;
    this.setInitialDirection();
  }

  private setInitialDirection(): void {
    this._direction = generateRandomBit() ? Directions.Left : Directions.Right;
  }

  swim(): void {
    if (this._direction === Directions.Left) {
      this._x -= this._speed;
      if (this._x <= 0) {
        this._direction = Directions.Right;
      }
    } else {
      this._x += this._speed;
      if (this._x >= Game.instance.level.bgImg.width) {
        this._direction = Directions.Left;
      }
    }
  }
}

export default FloatingGuidedObstacle;
