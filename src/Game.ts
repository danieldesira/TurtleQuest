import Turtle from "./characters/Turtle";
import ICharacter from "./characters/interfaces/ICharacter";
import INonMainCharacter from "./characters/interfaces/INonMainCharacter";
import {
  startLoadingLevel,
  stopLoadingLevel,
} from "./features/gameState/gameStateReducer";
import { resetLevel, restoreLevel } from "./features/levels/levelReducer";
import {
  resetTurtle,
  restoreFood,
  restoreHealth,
  restoreOxygen,
  restorePoints,
  restoreStomachCapacity,
} from "./features/turtleMonitor/turtleReducers";
import ILevel from "./levels/ILevel";
import levels from "./levels/levels";
import GameData from "./restoreGame/GameData";
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
   * @author Daniel Desira
   */
  async loadNewLevel() {
    this._level = levels.get(store.getState().levels.level.value);
    if (this._level) {
      store.dispatch(startLoadingLevel());
      await this._level.init();
      store.dispatch(stopLoadingLevel());
      this.turtle.resetPosition();
    }
  }

  /**
   * Initialises game.
   * @param canvas The canvas element
   * @author Daniel Desira
   */
  async start(canvas: HTMLCanvasElement) {
    await Game.instance.turtle.loadImage();
    await Game.instance.loadNewLevel();
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

export default Game;
