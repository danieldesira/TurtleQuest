import Level from "./level";
import levels from "./levels";

function selectLvl(currentLevel: number): Level | true {
  if (currentLevel <= levels.length) {
    return levels[currentLevel - 1];
  } else {
    return true;
  }
}

export default selectLvl;
