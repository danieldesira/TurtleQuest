import Level from "./Level";
import LevelCharacter from "./LevelCharacter";

class Level1 extends Level {
  protected readonly _backgroundImageFilename: string = "level1.png";
  protected readonly _initialCharacters: LevelCharacter[] = [
    { type: "shrimp", amount: 20 },
    { type: "sardine", amount: 10 },
    { type: "plasticBag", amount: 8 },
  ];
  protected readonly _benthicOffsetY: number = 9999;
  protected readonly _currentSpeed: number = 0.1;
  protected readonly _points: number = 10;
}

export default Level1;
