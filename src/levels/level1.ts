import ICharacter from "../characters/icharacter";
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
  ]);
}

export default Level1;
