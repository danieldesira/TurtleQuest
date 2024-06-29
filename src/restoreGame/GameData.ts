import Directions from "../enums/Directions";
import { CharacterType } from "../levels/LevelCharacter";

interface GameData {
  turtle: TurtleData;
  characters: CharacterData[];
  levelNo: number;
  xp: number;
}

interface TurtleData {
  x: number;
  y: number;
  direction: Directions;
  oxygen: number;
  food: number;
  health: number;
  stomachCapacity: number;
}

interface CharacterData {
  type: CharacterType;
  x: number;
  y: number;
  direction: Directions;
}

export default GameData;
