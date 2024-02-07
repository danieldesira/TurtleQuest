import Turtle from "./characters/Turtle";
import ILevel from "./levels/ILevel";
import selectLvl from "./levels/selectLvl";

class Game {
  private static _instance: Game;

  private constructor() {
    this._turtle = new Turtle();
    this._levelNo = 1;
    this.loadNewLevel();
  }

  static get instance(): Game {
    if (!this._instance) {
      this._instance = new Game();
    }
    return this._instance;
  }

  private _turtle: Turtle;
  private _levelNo: number;
  private _level: ILevel;

  incrementLevel() {
    this._levelNo++;
  }

  get turtle() {
    return this._turtle;
  }

  get levelNo() {
    return this._levelNo;
  }

  get level() {
    return this._level;
  }

  async loadNewLevel() {
    this._level = selectLvl(this._levelNo);
    await this._level.init();
  }
}

export default Game;
