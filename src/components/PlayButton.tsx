import React from "react";
import Game from "../Game";
import { useDispatch } from "react-redux";
import { resetLevel } from "../features/levels/levelReducer";
import { resetTurtle } from "../features/turtleMonitor/turtleReducers";
import { startGame } from "../features/gameState/gameStateReducer";
import { GiSeaTurtle } from "react-icons/gi";

interface Props {
  render: Function;
}

function PlayButton({ render }: Props) {
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
    <a href="#" onClick={handleClick}>
      <span className="text-white flex gap-2 text-5xl">
        <GiSeaTurtle /> Play
      </span>
    </a>
  );
}

export default PlayButton;
