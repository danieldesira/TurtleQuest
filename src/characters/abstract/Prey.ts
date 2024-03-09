import Game from "../../Game";
import directions from "../../enums/Directions";
import { eat } from "../../features/turtleMonitor/turtleReducers";
import store from "../../store";
import IPrey from "../interfaces/IPrey";
import NonMain from "./NonMain";

abstract class Prey extends NonMain implements IPrey {
  protected abstract readonly _foodValue: number;

  get foodValue() {
    return this._foodValue;
  }

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
        case directions.Left:
          this._x -= this._speed;
          break;
        case directions.Right:
          this._x += this._speed;
          break;
        case directions.Down:
          if (this._y <= Game.instance.level.benthicOffsetY) {
            this._y += this._speed;
          }
          break;
        case directions.Up:
          if (this._y > 0) {
            this._y -= this._speed;
          }
          break;
      }
    }
  }
}

export default Prey;
