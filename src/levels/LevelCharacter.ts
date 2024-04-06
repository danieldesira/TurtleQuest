interface LevelCharacter {
  type: CharacterType;
  amount: number;
}

export type CharacterType =
  | "sardine"
  | "shrimp"
  | "plasticBag"
  | "neptuneGrass"
  | "crab"
  | "boat";

export default LevelCharacter;
