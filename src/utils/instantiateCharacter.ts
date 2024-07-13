import Boat from "../characters/Boat";
import Crab from "../characters/Crab";
import NeptuneGrass from "../characters/NeptuneGrass";
import PlasticBag from "../characters/PlasticBag";
import Sardine from "../characters/Sardine";
import Shrimp from "../characters/Shrimp";
import INonMainCharacter from "../characters/interfaces/INonMainCharacter";
import { CharacterType } from "../levels/LevelCharacter";

/**
 * Instatiates a character object.
 * @param type The type of character.
 * @returns The new character instance.
 * @author Daniel Desira
 */
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

/**
 * Returns character type depending on provided character object.
 * @param character The character instance.
 * @returns The character type.
 * @author Daniel Desira
 */
const getCharacterType = (character: INonMainCharacter) => {
  let type: CharacterType;
  if (character instanceof Crab) {
    type = "crab";
  } else if (character instanceof Shrimp) {
    type = "shrimp";
  } else if (character instanceof Sardine) {
    type = "sardine";
  } else if (character instanceof NeptuneGrass) {
    type = "neptuneGrass";
  } else if (character instanceof PlasticBag) {
    type = "plasticBag";
  } else if (character instanceof Boat) {
    type = "boat";
  }
  return type;
};

export default instantiateCharacter;

export { getCharacterType };
