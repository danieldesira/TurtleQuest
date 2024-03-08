import Turtle from "./characters/Turtle";
import ILevel from "./levels/ILevel";
import selectLvl from "./levels/selectLvl";
import store from "./store";

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
    this._level = selectLvl(store.getState().levels.level.value);
    await this._level.init();
    this.turtle.resetPosition();
  }

  showWinVideo(context: CanvasRenderingContext2D) {
    const video = document.createElement("video");
    video.src = "./static/videos/baby-turtles.mp4";
    video.onloadeddata = () => {
      video.loop = true;
      video.play();
      context.drawImage(video, 0, 0, video.width, video.height);
    };
  }
}

export default Game;
