import ICharacter from "../characters/icharacter";
import PlasticBag from "../characters/plastic-bag";
import Shrimp from "../characters/shrimp";
import SmallFish from "../characters/small-fish";
import Level from "./level";

class Level1 extends Level {
  protected readonly _backgroundImageFilename: string = "bg-lvl1.png";
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
  protected readonly _benthicOffsetY: number = 9999;
}

export default Level1;
