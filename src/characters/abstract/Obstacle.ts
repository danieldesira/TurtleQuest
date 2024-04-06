import Game from "../../Game";
import { takeDamage } from "../../features/turtleMonitor/turtleReducers";
import store from "../../store";
import { generateRandomBit } from "../../utils/generic";
import IObstacle from "../interfaces/IObstacle";
import NonMain from "./NonMain";

abstract class Obstacle extends NonMain implements IObstacle {
  protected abstract readonly _damage: number;

  get damage() {
    return this._damage;
  }

  handleTurtleCollision(): void {
    store.dispatch(takeDamage({ turtle: { lifeValue: this._damage } }));
    super.handleTurtleCollision();
  }

  swim(): void {
    const speed = Game.instance.level.currentSpeed;
    this._x -= speed;
    const randomVerticalDirection = generateRandomBit();
    this._y += randomVerticalDirection ? speed : -speed;
  }
}

export default Obstacle;
