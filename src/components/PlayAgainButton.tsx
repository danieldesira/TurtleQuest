import React from "react";
import Game from "../Game";
import { useDispatch, useSelector } from "react-redux";
import RootState from "../features/RootState";
import { resetLevel } from "../features/levels/levelReducer";
import { resetTurtle } from "../features/turtleMonitor/turtleReducers";
import { startGame } from "../features/gameState/gameStateReducer";
import { RiRestartLine } from "react-icons/ri";

interface Props {
  render: Function;
}

function PlayAgainButton({ render }: Props) {
  const gameInProgress = useSelector(
    (state: RootState) => state.game.inProgress.value
  );
  const dispatch = useDispatch();
  const handleClick = async (event: React.MouseEvent) => {
    event.preventDefault();
    dispatch(resetLevel());
    dispatch(resetTurtle());
    dispatch(startGame());
    await Game.instance.loadNewLevel();
    await render();
  };
  return (
    <>
      {!gameInProgress ? (
        <div className="fixed h-full flex items-center justify-center w-full">
          <a href="#" onClick={handleClick}>
            <span className="text-white flex gap-2 text-5xl">
              <RiRestartLine /> Play again
            </span>
          </a>
        </div>
      ) : null}
    </>
  );
}

export default PlayAgainButton;
