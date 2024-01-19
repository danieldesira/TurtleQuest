import Level1 from "./level1";
import Level2 from "./level2";

export enum Levels {
  SameLevel = -1,
  GameComplete = 0,
  NewLevel = 1 | 2,
}

const levels = [new Level1(), new Level2()];

export default levels;
