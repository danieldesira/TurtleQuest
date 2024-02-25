import Game from "../../Game";
import directions from "../../enums/Directions";
import { eat } from "../../features/turtleMonitor/turtleReducers";
import store from "../../store";
import Character from "./Character";

abstract class Prey extends Character {
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
    const maxPreyDistance = 50;
    const turtle = Game.instance.turtle;
    const horizontalDistance = Math.abs(turtle.x - this._x);
    const verticalDistance = Math.abs(turtle.y - this._y);
    if (
      horizontalDistance < maxPreyDistance &&
      verticalDistance < maxPreyDistance
    ) {
      console.log(
        `Turtle position: ${turtle.x}, ${turtle.y}\nPrey position: ${this._x}, ${this._y}`
      );
      if (turtle.direction === directions.Left) {
        this._x -= this._speed;
      } else if (turtle.direction === directions.Right) {
        this._x += this._speed;
      }
    }
    super.swim();
  }
}

export default Prey;
