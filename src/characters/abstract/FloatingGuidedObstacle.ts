import Game from "../../Game";
import {
  collidedWithTurtleDown,
  collidedWithTurtleLeft,
  collidedWithTurtleRight,
  collidedWithTurtleUp,
} from "../../checkTurtle";
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

  isCollidingWithTurtle(): boolean {
    const turtle = Game.instance.turtle;
    let isCollision = false;
    switch (turtle.direction) {
      case Directions.Left:
        isCollision =
          collidedWithTurtleLeft(this._x, this._y + this._height) ||
          collidedWithTurtleLeft(this._x + this._width, this._y + this._height);
        break;
      case Directions.Right:
        isCollision =
          collidedWithTurtleRight(this._x, this._y + this._height) ||
          collidedWithTurtleRight(
            this._x + this._width,
            this._y + this._height
          );
        break;
      case Directions.Up:
        isCollision =
          collidedWithTurtleUp(this._x, this._y + this._height) ||
          collidedWithTurtleUp(this._x + this._width, this._y + this._height);
        break;
      case Directions.Down:
        isCollision =
          collidedWithTurtleDown(this._x, this._y + this._height) ||
          collidedWithTurtleDown(this._x + this._width, this._y + this._height);
        break;
    }
    return isCollision;
  }
}

export default FloatingGuidedObstacle;
