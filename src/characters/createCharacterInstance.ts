import NonMain from "./abstract/NonMain";
import Boat from "./Boat";
import Crab from "./Crab";
import NeptuneGrass from "./NeptuneGrass";
import PlasticBag from "./PlasticBag";
import Sardine from "./Sardine";
import Shrimp from "./Shrimp";

const characterMap: { [key: string]: new () => NonMain } = {
  Boat: Boat,
  Crab: Crab,
  NeptuneGrass: NeptuneGrass,
  PlasticBag: PlasticBag,
  Sardine: Sardine,
  Shrimp: Shrimp,
};

const createCharacterInstance = (className: string): NonMain => {
  const CharacterConstructor = characterMap[className];
  if (CharacterConstructor) {
    return new CharacterConstructor();
  } else {
    throw new Error("Character undefined");
  }
};

export default createCharacterInstance;
