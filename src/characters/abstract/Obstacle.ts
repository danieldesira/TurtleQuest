import Game from "../../Game";
import { takeDamage } from "../../features/turtleMonitor/turtleReducers";
import store from "../../store";
import NonMain from "./NonMain";

abstract class Obstacle extends NonMain {
  handleTurtleCollision(): void {
    store.dispatch(takeDamage({ turtle: { lifeValue: this._damage } }));
    super.handleTurtleCollision();
  }

  swim(): void {
    const speed = Game.instance.level.currentSpeed;
    this._x -= speed;
    const randomVeriticalDirection = Math.round(Math.random());
    const randomHorizontalDirection = Math.round(Math.random());
    this._y += randomVeriticalDirection ? speed : -speed;
    this._x += randomHorizontalDirection ? speed : -speed;
  }
}

export default Obstacle;
