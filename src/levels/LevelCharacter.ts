interface LevelCharacter {
  type: CharacterType;
  amount: number;
}

export type CharacterType =
  | "sardine"
  | "shrimp"
  | "plasticBag"
  | "neptuneGrass";

export default LevelCharacter;
