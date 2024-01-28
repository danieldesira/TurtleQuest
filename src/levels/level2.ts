import ICharacter from "../characters/icharacter";
import Level from "./level";

class Level2 extends Level {
  protected _backgroundImagePath: string = "./images/bg-demo-black.png";
  protected _characters: Set<ICharacter> = new Set([]);
}

export default Level2;
