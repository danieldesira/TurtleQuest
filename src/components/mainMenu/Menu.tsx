import React, { useState } from "react";
import { startGame } from "../../features/gameState/gameStateReducer";
import { useDispatch } from "react-redux";
import MenuButton from "./MenuButton";
import { GiSeaTurtle } from "react-icons/gi";
import { FcAbout } from "react-icons/fc";
import AboutDialog from "../dialog/AboutDialog";
import EditionSection from "../EditionSection";
import Game from "../../Game";
import parseGameData from "../../restoreGame/parseGameData";

function Menu() {
  const dispatch = useDispatch();
  const [showAbout, setShowAbout] = useState<boolean>(false);

  const handleNewGame = () => {
    dispatch(startGame());
    Game.instance.reset();
  };

  const handleContinueGame = () => {
    dispatch(startGame());
    parseGameData(localStorage.getItem("currentGame") ?? "{}");
  };

  const handleAbout = () => setShowAbout(true);

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
        <span className="text-white">Beta release</span>
        <MenuButton
          callback={handleNewGame}
          icon={<GiSeaTurtle />}
          text="New Game"
        />
        {localStorage.getItem("currentGame") ? (
          <MenuButton
            callback={handleContinueGame}
            icon={<GiSeaTurtle />}
            text="Continue Game"
          />
        ) : null}
        <MenuButton callback={handleAbout} icon={<FcAbout />} text="About" />
        <EditionSection />
      </div>
      {showAbout ? <AboutDialog setShowAbout={setShowAbout} /> : null}
    </>
  );
}

export default Menu;
