import Level1 from "./Level1";
import Level2 from "./Level2";

export enum LevelChangeTypes {
  GameOver = 0,
  NewLevel = 1,
  SameLevel = 2,
  GameComplete = 3,
}

const levels = [new Level1()];

export default levels;
