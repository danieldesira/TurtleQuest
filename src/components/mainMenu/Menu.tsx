import React from "react";
import StartGameButton from "./StartGameButton";
import { startGame } from "../../features/gameState/gameStateReducer";
import { useDispatch } from "react-redux";

function Menu() {
  const dispatch = useDispatch();

  const loadGame = () => dispatch(startGame());

  return (
    <>
      <video
        className="max-h-screen max-w-screen m-auto"
        src="./static/videos/baby-turtles.mp4"
        autoPlay
        loop
        muted
      />
      <div className="fixed top-0 left-0 h-full flex flex-col items-center justify-center w-full gap-2">
        <h1>
          <span className="text-emerald-300">Turtle</span>{" "}
          <span className="text-cyan-500">Quest</span>
        </h1>
        <StartGameButton callback={loadGame} text="New Game" />
      </div>
    </>
  );
}

export default Menu;
