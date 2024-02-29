import Level from "./Level";
import LevelCharacter from "./LevelCharacter";

class Level2 extends Level {
  protected readonly _backgroundImageFilename: string = "bg-demo-black.png";
  protected readonly _initialCharacters: LevelCharacter[] = [
    { type: "plasticBag", amount: 10 },
    { type: "neptuneGrass", amount: 4 },
  ];
  protected readonly _benthicOffsetY: number = 600;
}

export default Level2;
