import React from "react";
import { startGame } from "../../features/gameState/gameStateReducer";
import { useDispatch } from "react-redux";
import MenuButton from "./MenuButton";
import { GiSeaTurtle } from "react-icons/gi";

function Menu() {
  const dispatch = useDispatch();

  const handleNewGame = () => dispatch(startGame());

  return (
    <>
      <video
        className="max-h-screen max-w-screen m-auto"
        src="./static/videos/baby-turtles.mp4"
        autoPlay
        loop
        muted
      />
      <div className="fixed top-0 left-0 h-full flex flex-col items-center justify-center w-full gap-5">
        <h1 className="text-5xl">
          <span className="text-emerald-300">Turtle</span>{" "}
          <span className="text-cyan-500">Quest</span>
        </h1>
        <MenuButton
          callback={handleNewGame}
          icon={<GiSeaTurtle />}
          text="New Game"
        />
      </div>
    </>
  );
}

export default Menu;
