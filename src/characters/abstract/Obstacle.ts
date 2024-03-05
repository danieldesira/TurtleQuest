import { takeDamage } from "../../features/turtleMonitor/turtleReducers";
import store from "../../store";
import NonMain from "./NonMain";

abstract class Obstacle extends NonMain {
  handleTurtleCollision(): void {
    store.dispatch(takeDamage({ turtle: { lifeValue: this._damage } }));
    super.handleTurtleCollision();
  }

  swim(): void {
    this._x -= this._speed;
    super.swim();
  }
}

export default Obstacle;
