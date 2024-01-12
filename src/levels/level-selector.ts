import Level from "./level";
import Level1 from "./level1";

function selectLvl(currentLevel: number): Level {
  switch (currentLevel) {
    case 1:
      return new Level1();
  }
}

export default selectLvl;
