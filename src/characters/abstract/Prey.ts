import Game from "../../Game";
import Directions from "../../enums/Directions";
import { eat } from "../../features/turtleMonitor/turtleReducers";
import store from "../../store";
import IPrey from "../interfaces/IPrey";
import NonMain from "./NonMain";

abstract class Prey extends NonMain implements IPrey {
  protected abstract readonly _foodValue: number;

  get foodValue() {
    return this._foodValue;
  }

  /**
   * Implements prey behaviour for collision with turtle.
   * i.e.: check if turtle has enough stomach capacity,
   * increase food value and apply default behaviour
   * @override
   * @author Daniel Desira
   */
  handleTurtleCollision(): void {
    const canTurtleEatCharacter =
      store.getState().turtleMonitor.turtle.stomachCapacity.value -
        this._stomachImpact >
      0;
    if (canTurtleEatCharacter) {
      store.dispatch(eat({ turtle: { foodValue: this._foodValue } }));
      super.handleTurtleCollision();
    }
  }

  /**
   * Swim and respond to turtle approaching. Keeps to the same direction of the turtle.
   * @override
   * @author Daniel Desira
   */
  swim(): void {
    const maxPreyDistance = 150;
    const turtle = Game.instance.turtle;
    const horizontalDistance = Math.abs(turtle.x - this._x);
    const verticalDistance = Math.abs(turtle.y - this._y);
    if (
      horizontalDistance < maxPreyDistance &&
      verticalDistance < maxPreyDistance
    ) {
      switch (turtle.direction) {
        case Directions.Left:
          this._direction = Directions.Left;
          this._x -= this._speed;
          break;
        case Directions.Right:
          this._direction = Directions.Right;
          this._x += this._speed;
          break;
        case Directions.Down:
          this._direction = Directions.Down;
          if (this._y <= Game.instance.level.benthicOffsetY) {
            this._y += this._speed;
          }
          break;
        case Directions.Up:
          this._direction = Directions.Up;
          if (this._y > 0) {
            this._y -= this._speed;
          }
          break;
      }
    }
  }

  /**
   * Paints prey while taking direction into account.
   * @param context The canvas 2D context
   * @override
   * @author Daniel Desira
   */
  paint(context: CanvasRenderingContext2D) {
    this.applyRotation(context);
    if (this._image) {
      context.drawImage(
        this._image,
        this._x - Game.instance.level.bgOffsetX,
        this._y - Game.instance.level.bgOffsetY,
        this._width,
        this._height
      );
    }
    context.resetTransform();
  }
}

export default Prey;
