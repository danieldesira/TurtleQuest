import Boat from "../characters/Boat";
import Crab from "../characters/Crab";
import NeptuneGrass from "../characters/NeptuneGrass";
import PlasticBag from "../characters/PlasticBag";
import Sardine from "../characters/Sardine";
import Shrimp from "../characters/Shrimp";
import INonMainCharacter from "../characters/interfaces/INonMainCharacter";
import { CharacterType } from "../levels/LevelCharacter";

const instantiateCharacter = (type: CharacterType): INonMainCharacter => {
  let character: INonMainCharacter;
  switch (type) {
    case "shrimp":
      character = new Shrimp();
      break;
    case "sardine":
      character = new Sardine();
      break;
    case "neptuneGrass":
      character = new NeptuneGrass();
      break;
    case "plasticBag":
      character = new PlasticBag();
      break;
    case "crab":
      character = new Crab();
      break;
    case "boat":
      character = new Boat();
      break;
  }
  return character;
};

export default instantiateCharacter;
