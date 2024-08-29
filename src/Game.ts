import Turtle from "./characters/Turtle";
import {
  startLoadingLevel,
  stopLoadingLevel,
} from "./features/gameState/gameStateReducer";
import { resetLevel } from "./features/levels/levelReducer";
import { resetTurtle } from "./features/turtleMonitor/turtleReducers";
import ILevel from "./levels/ILevel";
import { createLevelInstance } from "./levels/levels";
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

  /**
   * Loads the level currently indicated by the Redux store.
   * @param isFreshLevel Flag used to determine whether level is fresh or restored.
   * @author Daniel Desira
   */
  async loadNewLevel(isFreshLevel: boolean) {
    this._level = createLevelInstance(store.getState().levels.level.value);
    if (this._level) {
      store.dispatch(startLoadingLevel());
      await this._level.init(isFreshLevel);
      store.dispatch(stopLoadingLevel());
    }
    if (isFreshLevel) {
      this.turtle.resetPosition();
    }
  }

  /**
   * Initialises game.
   * @param options The game options.
   * @author Daniel Desira
   */
  async start({ canvas, isNewGame }: GameOptions) {
    await Game.instance.turtle.loadImage();
    await Game.instance.loadNewLevel(isNewGame);
    await animate(canvas);
    resizeCanvas(canvas);
  }

  /**
   * Resets game state.
   * @author Daniel Desira
   */
  reset() {
    store.dispatch(resetLevel());
    store.dispatch(resetTurtle());
  }
}

type GameOptions = {
  canvas: HTMLCanvasElement;
  isNewGame: boolean;
};

export default Game;
