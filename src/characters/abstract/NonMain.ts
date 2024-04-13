import Game from "../../Game";
import {
  collidedWithTurtleDown,
  collidedWithTurtleLeft,
  collidedWithTurtleRight,
  collidedWithTurtleUp,
} from "../../checkTurtle";
import Directions from "../../enums/Directions";
import {
  decrementStomachCapacity,
  gainPoints,
} from "../../features/turtleMonitor/turtleReducers";
import store from "../../store";
import INonMainCharacter from "../interfaces/INonMainCharacter";
import Character from "./Character";

abstract class NonMain extends Character implements INonMainCharacter {
  protected abstract readonly _speed: number;
  protected abstract readonly _stomachImpact: number;
  protected abstract readonly _points: number;

  protected get initialPositionXFrom(): number {
    return 0;
  }

  protected get initialPositionXTo(): number {
    return Game.instance.level.bgImg.width;
  }

  protected get initialPositionYFrom(): number {
    return 0;
  }

  protected get initialPositionYTo(): number {
    return Game.instance.level.bgImg.height;
  }

  get stomachImpact() {
    return this._stomachImpact;
  }

  get points() {
    return this._points;
  }

  setInitialPosition(): void {
    this._x =
      Math.random() * (this.initialPositionXTo - this.initialPositionXFrom) +
      this.initialPositionXFrom;
    this._y =
      Math.random() * (this.initialPositionYTo - this.initialPositionYFrom) +
      this.initialPositionYFrom;
  }

  handleTurtleCollision(): void {
    store.dispatch(
      decrementStomachCapacity({
        turtle: { stomachValue: this._stomachImpact },
      })
    );
    store.dispatch(gainPoints({ turtle: { xpValue: this._points } }));
    Game.instance.level.characters.delete(this);
  }

  abstract swim(): void;

  isCollidingWithTurtle(): boolean {
    let isCollision = false;
    switch (Game.instance.turtle.direction) {
      case Directions.Left:
        isCollision =
          collidedWithTurtleLeft(this._x + this._width, this._y) ||
          collidedWithTurtleLeft(this._x + this._width, this._y + this._height);
        break;
      case Directions.Right:
        isCollision =
          collidedWithTurtleRight(this._x, this._y) ||
          collidedWithTurtleRight(this._x, this._y + this._height);
        break;
      case Directions.Up:
        isCollision =
          collidedWithTurtleUp(this._x, this._y + this._height) ||
          collidedWithTurtleUp(this._x + this._width, this._y + this._height);
        break;
      case Directions.Down:
        isCollision =
          collidedWithTurtleDown(this._x, this._y) ||
          collidedWithTurtleDown(this._x + this._width, this._y);
        break;
    }

    return isCollision;
  }
}

export default NonMain;
