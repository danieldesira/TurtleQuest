import Level from "./level";
import Level1 from "./level1";
import Level2 from "./level2";

function selectLvl(currentLevel: number): Level | true {
  switch (currentLevel) {
    case 1:
      return new Level1();
    case 2:
      return new Level2();
    default:
      return true;
  }
}

export default selectLvl;
