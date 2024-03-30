import Level from "./Level";
import LevelCharacter from "./LevelCharacter";

class Level2 extends Level {
  protected readonly _backgroundImageFilename: string = "level2.png";
  protected readonly _initialCharacters: LevelCharacter[] = [
    { type: "plasticBag", amount: 10 },
    { type: "neptuneGrass", amount: 4 },
    { type: "shrimp", amount: 30 },
    { type: "crab", amount: 5 },
  ];
  protected readonly _benthicOffsetY: number = 550;
  protected readonly _currentSpeed: number = 0.15;
  protected readonly _points: number = 10;
}

export default Level2;
