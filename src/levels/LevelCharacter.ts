import CharacterOptions from "../characters/interfaces/CharacterOptions";
import INonMainCharacter from "../characters/interfaces/INonMainCharacter";

interface LevelCharacter {
  constructor: CharacterConstructor;
  amount: number;
}

interface CharacterConstructor {
  new (options?: CharacterOptions): INonMainCharacter;
}

export default LevelCharacter;
