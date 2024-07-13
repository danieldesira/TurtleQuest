import Game from "../Game";
import { restoreLevel } from "../features/levels/levelReducer";
import {
  restoreFood,
  restoreHealth,
  restoreOxygen,
  restorePoints,
  restoreStomachCapacity,
} from "../features/turtleMonitor/turtleReducers";
import store from "../store";
import instantiateCharacter from "../utils/instantiateCharacter";
import GameData from "./GameData";

/**
 * Restore game state from JSON string.
 * @param json The game data as a JSON string.
 * @author Daniel Desira
 */
const parseGameData = (json: string) => {
  const data: GameData = JSON.parse(json);
  restoreTurtle(data);
  restoreState(data);
  restoreCharacters(data);
};

const restoreTurtle = (data: GameData) => {
  Game.instance.turtle.x = data.turtle.x;
  Game.instance.turtle.y = data.turtle.y;
  Game.instance.turtle.direction = data.turtle.direction;
};

const restoreState = (data: GameData) => {
  store.dispatch(restoreFood({ turtle: { foodValue: data.turtle.food } }));
  store.dispatch(restoreHealth({ turtle: { lifeValue: data.turtle.health } }));
  store.dispatch(
    restoreOxygen({ turtle: { oxygenValue: data.turtle.oxygen } })
  );
  store.dispatch(
    restoreStomachCapacity({
      turtle: { stomachValue: data.turtle.stomachCapacity },
    })
  );
  store.dispatch(restorePoints({ turtle: { xpValue: data.xp } }));
  store.dispatch(restoreLevel({ turtle: { levelValue: data.levelNo } }));
};

const restoreCharacters = (data: GameData) => {
  for (const character of data.characters) {
    const temp = instantiateCharacter(character.type);
    temp.x = character.x;
    temp.y = character.y;
    Game.instance.level.characters.add(temp);
  }
};

export default parseGameData;
