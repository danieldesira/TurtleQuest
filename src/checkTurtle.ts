import Game from "./Game";
import { updateDialogContent } from "./features/dialogs/dialogReducer";
import { stopGame } from "./features/gameState/gameStateReducer";
import { levelUp } from "./features/levels/levelReducer";
import {
  breath,
  gainPoints,
  recoverStomachCapacity,
  respire,
  useFood,
} from "./features/turtleMonitor/turtleReducers";
import { LevelChangeTypes, levelMap } from "./levels/levels";
import store from "./store";

/**
 * Fires checks regarding game status and reacts accordingly.
 * @returns Promise to game status.
 * @author Daniel Desira
 */
const checkTurtle = async (): Promise<LevelChangeTypes> => {
  const mainCharacter = Game.instance.turtle;
  const bgWidth = Game.instance.level.bgImg.width;

  store.dispatch(useFood());
  store.dispatch(recoverStomachCapacity());

  const turtleState = store.getState().turtleMonitor.turtle;

  if (
    turtleState.food.value <= 0 ||
    turtleState.oxygen.value <= 0 ||
    turtleState.life.value <= 0
  ) {
    store.dispatch(stopGame());
    deleteGameProgress();
    return LevelChangeTypes.GameOver;
  }

  if (mainCharacter.y <= 0) {
    store.dispatch(breath());
  } else {
    store.dispatch(respire());
  }

  if (mainCharacter.x >= bgWidth) {
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
    store.dispatch(
      updateDialogContent({
        dialog: {
          title: "Level Up",
          text: [`Welcome to level ${store.getState().levels.level.value}`],
        },
      })
    );
    return LevelChangeTypes.NewLevel;
  } else {
    store.dispatch(stopGame());
    deleteGameProgress();
    return LevelChangeTypes.GameComplete;
  }
};

const deleteGameProgress = () => localStorage.removeItem("currentGame");

export default checkTurtle;
