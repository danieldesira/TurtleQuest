import Boat from "../characters/Boat";
import Crab from "../characters/Crab";
import NeptuneGrass from "../characters/NeptuneGrass";
import PlasticBag from "../characters/PlasticBag";
import Shrimp from "../characters/Shrimp";
import Level from "./Level";
import LevelCharacter from "./LevelCharacter";

class Level2 extends Level {
  protected readonly _backgroundImageFilename: string = "level2.png";
  protected readonly _initialCharacters: LevelCharacter[] = [
    { constructor: PlasticBag, amount: 10 },
    { constructor: NeptuneGrass, amount: 4 },
    { constructor: Shrimp, amount: 30 },
    { constructor: Crab, amount: 5 },
    { constructor: Boat, amount: 1 },
  ];
  protected readonly _benthicOffsetY: number = 550;
  protected readonly _currentSpeed: number = 0.15;
  protected readonly _points: number = 10;
}

export default Level2;
