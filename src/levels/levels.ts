import Level from "./Level";
import Level1 from "./Level1";
import Level2 from "./Level2";

export type LevelChangeTypes = "GameEnd" | "NewLevel" | "SameLevel";

export const levelMap: {
  [key: number]: { description: string; constructor: new () => Level };
} = {
  1: {
    description:
      "Warm up level. Avoid plastic bags. Eat shrimp and sardines. Move the turtle to the right edge of the screen.",
    constructor: Level1,
  },
  2: {
    description:
      "Mind the boat. You may also eat crabs at the bottom for extra points!",
    constructor: Level2,
  },
};

/**
 * Instantiates a level responding to a level number.
 * @param levelNo The level number
 * @returns The instance
 * @author Daniel Desira
 */
export const createLevelInstance = (levelNo: number): Level => {
  const LevelConstructor = levelMap[levelNo].constructor;
  if (LevelConstructor) {
    return new LevelConstructor();
  } else {
    throw new Error("Level undefined");
  }
};

/**
 * Returns flag if the level no is beyond the last possible level
 * @param levelNo The level no
 * @returns Flag determining win
 * @author Daniel Desira
 */
export const hasPlayerWon = (levelNo: number): boolean => {
  const keys = Object.keys(levelMap).map((key) => parseInt(key));
  return Math.max(...keys) < levelNo;
};
