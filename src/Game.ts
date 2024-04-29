import Turtle from "./characters/Turtle";
import ICharacter from "./characters/interfaces/ICharacter";
import {
  startLoadingLevel,
  stopLoadingLevel,
} from "./features/gameState/gameStateReducer";
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
    store.dispatch(resetLevel());
    store.dispatch(resetTurtle());
    await Game.instance.turtle.loadImage();
    await Game.instance.loadNewLevel();
    await animate(canvas);
    resizeCanvas(canvas);
  }

  /**
   * Returns a JSON representation of important game details.
   * @returns JSON representation
   * @author Daniel Desira
   */
  stringifyInfo(): string {
    const data: GameData = {
      turtle: Game.instance.turtle,
      characters: Array.from(Game.instance.level.characters),
      levelNo: store.getState().levels.level.value,
    };
    return JSON.stringify(data);
  }

  /**
   * Sets game data from the given JSON string.
   * @param json Game data in JSON format
   * @author Daniel Desira
   */
  parseInfo(json: string) {
    const data: GameData = JSON.parse(json);
    this._turtle = data.turtle;
  }
}

interface GameData {
  turtle: Turtle;
  characters: ICharacter[];
  levelNo: number;
}

export default Game;
