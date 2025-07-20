import Directions from "../enums/Directions";

interface GameData {
  turtle: TurtleData;
  characters: CharacterData[];
  levelNo: number;
  xp: number;
  timestamp: Date;
  userEmail: string;
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
  type: string;
  x: number;
  y: number;
  direction: Directions;
}

export default GameData;
