import PlasticBag from "../characters/PlasticBag";
import Sardine from "../characters/Sardine";
import Shrimp from "../characters/Shrimp";
import Level from "./Level";
import LevelCharacter from "./LevelCharacter";

class Level1 extends Level {
  protected readonly _backgroundImageFilename: string = "level1.png";
  protected readonly _initialCharacters: LevelCharacter[] = [
    { constructor: Shrimp, amount: 20 },
    { constructor: Sardine, amount: 10 },
    { constructor: PlasticBag, amount: 8 },
  ];
  protected readonly _benthicOffsetY: number = 9999;
  protected readonly _currentSpeed: number = 0.1;
  protected readonly _points: number = 10;
}

export default Level1;
