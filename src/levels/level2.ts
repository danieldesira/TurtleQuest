import ICharacter from "../characters/icharacter";
import Level from "./level";

class Level2 extends Level {
  protected backgroundImagePath: string = "./images/bg-demo-black.png";
  protected characters: Set<ICharacter> = new Set([]);
}

export default Level2;
