import React from "react";
import { useDispatch } from "react-redux";
import { stopGame } from "../features/gameState/gameStateReducer";
import Game from "../Game";

function BackButton() {
  const dispatch = useDispatch();

  const saveGame = () =>
    localStorage.setItem("currentGame", Game.instance.stringifyInfo());

  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault();

    saveGame();
    dispatch(stopGame());
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="bg-black opacity-60 hover:opacity-90 rounded-xl p-2"
    >
      Menu
    </button>
  );
}

export default BackButton;
