import Game from "./Game";
import {
  triggerMenuMode,
  triggerSavingMode,
} from "./features/gameState/gameStateReducer";
import { levelUp } from "./features/levels/levelReducer";
import {
  breath,
  gainPoints,
  recoverStomachCapacity,
  respire,
  useFood,
} from "./features/turtleMonitor/turtleReducers";
import { LevelChangeTypes, levelMap } from "./levels/levels";
import { deleteLastGame, saveScore } from "./services/api";
import store from "./store";
import {
  deleteLastGameLocalStorage,
  deleteLastGameTimestampLocalStorage,
} from "./utils/lastGameLocalStorage";

/**
 * Fires checks regarding game status and reacts accordingly.
 * @returns Promise to game status.
 * @author Daniel Desira
 */
const checkTurtle = async (): Promise<LevelChangeTypes> => {
  const mainCharacter = Game.instance.turtle;

  store.dispatch(useFood());
  store.dispatch(recoverStomachCapacity());

  const turtleState = store.getState().turtleMonitor.turtle;

  if (
    turtleState.food.value <= 0 ||
    turtleState.oxygen.value <= 0 ||
    turtleState.life.value <= 0
  ) {
    store.dispatch(triggerSavingMode());
    await deleteLastGameAndSaveScore();

    store.dispatch(triggerMenuMode());
    return LevelChangeTypes.GameOver;
  }

  if (mainCharacter.y <= 0) {
    store.dispatch(breath());
  } else {
    store.dispatch(respire());
  }

  const backgroundImage = Game.instance.level.bgImg;
  if (backgroundImage && mainCharacter.x >= backgroundImage.width) {
    return await handleOffBgWidth();
  }

  Game.instance.level.checkIfTurtleMeetsCharacters();

  Game.instance.level.moveCharacters();

  return LevelChangeTypes.SameLevel;
};

const handleOffBgWidth = async (): Promise<LevelChangeTypes> => {
  store.dispatch(
    gainPoints({ turtle: { xpValue: Game.instance.level.points } })
  );
  store.dispatch(levelUp());
  if (levelMap[store.getState().levels.level.value]) {
    await Game.instance.loadNewLevel(true);
    return LevelChangeTypes.NewLevel;
  } else {
    store.dispatch(triggerSavingMode());
    await deleteLastGameAndSaveScore();

    store.dispatch(triggerMenuMode());
    return LevelChangeTypes.GameComplete;
  }
};

const deleteLastGameAndSaveScore = async (): Promise<void> => {
  await Promise.all([deleteLastGame(), saveScore()]);
  deleteLastGameLocalStorage();
  deleteLastGameTimestampLocalStorage();
};

export default checkTurtle;
