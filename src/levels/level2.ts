import ICharacter from "../characters/icharacter";
import Level from "./level";

class Level2 extends Level {
  protected backgroundImage: HTMLImageElement;
  protected backgroundImagePath: string = "./images/bg-demo-black.png";
  protected characters: Set<ICharacter>;
}

export default Level2;
