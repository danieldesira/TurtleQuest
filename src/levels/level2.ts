import ICharacter from "../characters/icharacter";
import PlasticBag from "../characters/plastic-bag";
import Level from "./level";

class Level2 extends Level {
  protected _backgroundImagePath: string = "./images/bg-demo-black.png";
  protected _characters: Set<ICharacter> = new Set([
    new PlasticBag(),
    new PlasticBag(),
    new PlasticBag(),
    new PlasticBag(),
    new PlasticBag(),
    new PlasticBag(),
    new PlasticBag(),
    new PlasticBag(),
    new PlasticBag(),
    new PlasticBag(),
    new PlasticBag(),
    new PlasticBag(),
    new PlasticBag(),
    new PlasticBag(),
    new PlasticBag(),
    new PlasticBag(),
    new PlasticBag(),
    new PlasticBag(),
  ]);
}

export default Level2;
