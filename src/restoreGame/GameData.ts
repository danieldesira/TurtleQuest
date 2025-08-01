import { Direction } from "../constants";

interface GameData {
  turtle: TurtleData;
  characters: CharacterData[];
  levelNo: number;
  xp: number;
}

interface TurtleData {
  x: number;
  y: number;
  direction: Direction;
  oxygen: number;
  food: number;
  health: number;
  stomachCapacity: number;
}

interface CharacterData {
  type: string;
  x: number;
  y: number;
  direction: Direction;
}

export default GameData;
