import Level1 from "./level1";
import Level2 from "./level2";

export enum LevelChangeTypes {
  GameOver = 0,
  NewLevel = 1,
  SameLevel = 2,
  GameComplete = 3,
}

const levels = [new Level1(), new Level2()];

export default levels;
