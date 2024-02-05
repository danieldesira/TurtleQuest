import Level from "./Level";
import levels from "./levels";

function selectLvl(currentLevel: number): Level {
  if (currentLevel <= levels.length) {
    return levels[currentLevel - 1];
  } else {
    throw new Error(`Level ${currentLevel} not implemented`);
  }
}

export default selectLvl;
