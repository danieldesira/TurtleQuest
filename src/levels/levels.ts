import Level from "./Level";
import Level1 from "./Level1";
import Level2 from "./Level2";

export type LevelChangeTypes = "GameEnd" | "NewLevel" | "SameLevel";

export const levelMap: {
  [key: number]: new () => Level;
} = {
  1: Level1,
  2: Level2,
};

/**
 * Instantiates a level responding to a level number.
 * @param levelNo The level number
 * @returns The instance
 * @author Daniel Desira
 */
export const createLevelInstance = (levelNo: number): Level => {
  const LevelConstructor = levelMap[levelNo];
  if (LevelConstructor) {
    return new LevelConstructor();
  } else {
    throw new Error("Level undefined");
  }
};
