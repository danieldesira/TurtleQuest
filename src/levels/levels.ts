import ILevel from "./ILevel";
import Level1 from "./Level1";
import Level2 from "./Level2";

export enum LevelChangeTypes {
  GameOver = 0,
  NewLevel = 1,
  SameLevel = 2,
  GameComplete = 3,
}

const levels: Map<number, ILevel> = new Map([
  [1, new Level1() as ILevel],
  [2, new Level2() as ILevel],
]);

export default levels;
