import ILevel from "./ILevel";
import levels from "./levels";

function selectLvl(currentLevel: number): ILevel {
  if (currentLevel <= levels.length) {
    return levels[currentLevel - 1];
  } else {
    throw new Error(`Level ${currentLevel} not implemented`);
  }
}

export default selectLvl;
