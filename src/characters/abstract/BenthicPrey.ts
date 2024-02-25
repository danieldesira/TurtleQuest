import Game from "../../Game";
import Prey from "./Prey";

abstract class BenthicPrey extends Prey {
  setInitialPosition(): void {
    this._x = Math.random() * Game.instance.level.bgImg.width;
    const level = Game.instance.level;
    this._y =
      Math.random() * (level.bgImg.height - level.benthicOffsetY) +
      level.benthicOffsetY;
  }
}

export default BenthicPrey;
