import Game from "../Game";
import Boat from "../characters/Boat";
import Crab from "../characters/Crab";
import NeptuneGrass from "../characters/NeptuneGrass";
import PlasticBag from "../characters/PlasticBag";
import Sardine from "../characters/Sardine";
import Shrimp from "../characters/Shrimp";
import { CharacterType } from "../levels/LevelCharacter";
import store from "../store";
import GameData from "./GameData";

const stringifyGameData = (): string => {
  const data: GameData = {
    turtle: {
      x: Game.instance.turtle.x,
      y: Game.instance.turtle.y,
      direction: Game.instance.turtle.direction,
      food: store.getState().turtleMonitor.turtle.food.value,
      oxygen: store.getState().turtleMonitor.turtle.oxygen.value,
      health: store.getState().turtleMonitor.turtle.life.value,
      stomachCapacity: store.getState().turtleMonitor.turtle.stomachCapacity
        .value,
    },
    characters: [...Game.instance.level.characters].map((c) => {
      return {
        x: c.x,
        y: c.y,
        direction: c.direction,
        type: (() => {
          let t: CharacterType;
          if (c instanceof Crab) {
            t = "crab";
          } else if (c instanceof Shrimp) {
            t = "shrimp";
          } else if (c instanceof Sardine) {
            t = "sardine";
          } else if (c instanceof NeptuneGrass) {
            t = "neptuneGrass";
          } else if (c instanceof PlasticBag) {
            t = "plasticBag";
          } else if (c instanceof Boat) {
            t = "boat";
          }
          return t;
        })(),
      };
    }),
    levelNo: store.getState().levels.level.value,
    xp: store.getState().turtleMonitor.turtle.xp.value,
  };
  return JSON.stringify(data);
};

export default stringifyGameData;
