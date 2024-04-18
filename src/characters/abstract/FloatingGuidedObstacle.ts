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

  /**
   * Sets initial position of this obstact along the top of the screen. (Floating)
   * @override
   * @author Daniel Desira
   */
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

  /**
   * Moves obstacle to and fro along the top of the screen.
   * @override
   * @author Daniel Desira
   */
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

  /**
   * Checks whether obstacle collided with turtle. Adapted for larger obstacles.
   * @returns Flag showing collision.
   * @override
   * @author Daniel Desira
   */
  isCollidingWithTurtle(): boolean {
    const turtle = Game.instance.turtle;
    let isCollision = false;

    const checkCollision = (collisionMethod: Function) => {
      for (let x = this._x; x <= this._x + this._width; x++) {
        for (let y = this._y; y <= this._y + this._height; y++) {
          if (collisionMethod(x, y)) {
            isCollision = true;
            break;
          }
        }
      }
    };

    switch (turtle.direction) {
      case Directions.Left:
        checkCollision(collidedWithTurtleLeft);
        break;
      case Directions.Right:
        checkCollision(collidedWithTurtleRight);
        break;
      case Directions.Up:
        checkCollision(collidedWithTurtleUp);
        break;
      case Directions.Down:
        checkCollision(collidedWithTurtleDown);
        break;
    }
    return isCollision;
  }
}

export default FloatingGuidedObstacle;
