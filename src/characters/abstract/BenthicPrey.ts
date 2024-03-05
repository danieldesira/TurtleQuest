import Game from "../../Game";
import Prey from "./Prey";

abstract class BenthicPrey extends Prey {
  protected get initialPositionYFrom(): number {
    return Game.instance.level.benthicOffsetY;
  }
}

export default BenthicPrey;
