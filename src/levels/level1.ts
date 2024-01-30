import ICharacter from "../characters/icharacter";
import PlasticBag from "../characters/plastic-bag";
import Shrimp from "../characters/shrimp";
import SmallFish from "../characters/small-fish";
import Level from "./level";

class Level1 extends Level {
  protected _backgroundImagePath: string = "./images/bg-lvl1.png";
  protected _characters: Set<ICharacter> = new Set([
    new Shrimp(),
    new Shrimp(),
    new Shrimp(),
    new Shrimp(),
    new Shrimp(),
    new Shrimp(),
    new Shrimp(),
    new SmallFish(),
    new SmallFish(),
    new PlasticBag(),
    new PlasticBag(),
    new PlasticBag(),
    new PlasticBag(),
  ]);
}

export default Level1;
