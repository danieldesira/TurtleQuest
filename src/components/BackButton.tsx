import React from "react";
import { useDispatch } from "react-redux";
import { stopGame } from "../features/gameState/gameStateReducer";
import { saveGame } from "../services/api";

function BackButton() {
  const dispatch = useDispatch();

  const handleClick = async (event: React.MouseEvent) => {
    event.preventDefault();

    await saveGame();
    dispatch(stopGame({}));
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
