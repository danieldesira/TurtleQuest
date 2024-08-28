import Game from "../Game";
import store from "../store";
import GameData from "./GameData";

/**
 * Gets game data as a JSON string.
 * @returns JSON string represantation of game data.
 * @author Daniel Desira
 */
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
        type: c.type,
      };
    }),
    levelNo: store.getState().levels.level.value,
    xp: store.getState().turtleMonitor.turtle.xp.value,
  };
  return JSON.stringify(data);
};

export default stringifyGameData;
