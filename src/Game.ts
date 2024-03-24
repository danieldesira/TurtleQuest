import Turtle from "./characters/Turtle";
import { resetLevel } from "./features/levels/levelReducer";
import { resetTurtle } from "./features/turtleMonitor/turtleReducers";
import ILevel from "./levels/ILevel";
import levels from "./levels/levels";
import store from "./store";
import animate from "./utils/animate";
import resizeCanvas from "./utils/resizeCanvas";

class Game {
  private static _instance: Game;

  private constructor() {
    this._turtle = new Turtle();
  }

  static get instance(): Game {
    if (!this._instance) {
      this._instance = new Game();
    }
    return this._instance;
  }

  private _turtle: Turtle;
  private _level: ILevel;

  get turtle() {
    return this._turtle;
  }

  get level() {
    return this._level;
  }

  async loadNewLevel() {
    this._level = levels.get(store.getState().levels.level.value);
    if (this._level) {
      await this._level.init();
      this.turtle.resetPosition();
    }
  }

  async start(canvas: HTMLCanvasElement) {
    store.dispatch(resetLevel());
    store.dispatch(resetTurtle());
    await Game.instance.turtle.loadImage();
    await Game.instance.loadNewLevel();
    await animate(canvas);
    resizeCanvas(canvas);
  }
}

export default Game;
