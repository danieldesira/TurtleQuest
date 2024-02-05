import ICharacter from "../characters/ICharacter";
import NeptuneGrass from "../characters/NeptuneGrass";
import PlasticBag from "../characters/PlasticBag";
import Level from "./Level";

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
