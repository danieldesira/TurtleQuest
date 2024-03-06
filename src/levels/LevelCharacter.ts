interface LevelCharacter {
  type: CharacterType;
  amount: number;
}

export type CharacterType =
  | "sardine"
  | "shrimp"
  | "plasticBag"
  | "neptuneGrass"
  | "crab";

export default LevelCharacter;
