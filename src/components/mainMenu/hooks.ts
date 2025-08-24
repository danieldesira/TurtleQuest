import { Dispatch, SetStateAction } from "react";
import { useDispatch } from "react-redux";
import { triggerGameMode } from "../../features/gameState/gameStateReducer";
import Game from "../../Game";
import { getLastGameLocalStorage } from "../../utils/lastGameLocalStorage";
import parseGameData from "../../restoreGame/parseGameData";

export const useGameStartActions = (
  setIsNewGame: Dispatch<SetStateAction<boolean>>
) => {
  const dispatch = useDispatch();

  return {
    startNewGame() {
      setIsNewGame(true);
      dispatch(triggerGameMode());
      Game.instance.reset();
    },
    continuePreviousGame() {
      setIsNewGame(false);
      dispatch(triggerGameMode());
      parseGameData(getLastGameLocalStorage());
    },
  };
};
