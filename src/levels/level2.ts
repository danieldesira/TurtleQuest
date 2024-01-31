import ICharacter from "../characters/icharacter";
import NeptuneGrass from "../characters/neptune-grass";
import PlasticBag from "../characters/plastic-bag";
import Level from "./level";

class Level2 extends Level {
  protected readonly _backgroundImageFilename: string = "bg-demo-black.png";
  protected _characters: Set<ICharacter> = new Set([
    new PlasticBag(),
    new PlasticBag(),
    new PlasticBag(),
    new PlasticBag(),
    new PlasticBag(),
    new PlasticBag(),
    new NeptuneGrass(),
    new NeptuneGrass(),
    new NeptuneGrass(),
    new NeptuneGrass(),
  ]);
  protected readonly _benthicOffsetY: number = 600;
}

export default Level2;
