import ICharacter from "../characters/ICharacter";
import PlasticBag from "../characters/PlasticBag";
import Shrimp from "../characters/Shrimp";
import Sardine from "../characters/Sardine";
import Level from "./Level";

class Level1 extends Level {
  protected readonly _backgroundImageFilename: string = "bg-lvl1.png";
  protected readonly _initialCharacters: Set<ICharacter> = new Set([
    new Shrimp(),
    new Shrimp(),
    new Shrimp(),
    new Shrimp(),
    new Shrimp(),
    new Shrimp(),
    new Shrimp(),
    new Sardine(),
    new Sardine(),
    new PlasticBag(),
    new PlasticBag(),
    new PlasticBag(),
    new PlasticBag(),
  ]);
  protected readonly _benthicOffsetY: number = 9999;
}

export default Level1;
