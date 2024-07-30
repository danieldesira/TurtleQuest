import React, { useEffect, useState } from "react";
import { startGame } from "../../features/gameState/gameStateReducer";
import { useDispatch } from "react-redux";
import MenuButton from "./MenuButton";
import { GiSeaTurtle } from "react-icons/gi";
import { FcAbout } from "react-icons/fc";
import AboutDialog from "../dialog/AboutDialog";
import EditionSection from "../EditionSection";
import Game from "../../Game";
import parseGameData from "../../restoreGame/parseGameData";
import { RiSettings5Fill } from "react-icons/ri";
import Settings from "../settings/Settings";

type Props = { setIsNewGame: Function };

function Menu({ setIsNewGame }: Props) {
  const dispatch = useDispatch();
  const [showAbout, setShowAbout] = useState<boolean>(false);
  const [mode, setMode] = useState<"main" | "settings">("main");

  const handleNewGame = () => {
    setIsNewGame(true);
    dispatch(startGame());
    Game.instance.reset();
  };

  const handleContinueGame = () => {
    setIsNewGame(false);
    dispatch(startGame());
    parseGameData(localStorage.getItem("currentGame") ?? "{}");
  };

  const handleAbout = () => setShowAbout(true);

  const handleSettings = () => setMode("settings");

  const screens = {
    main: (
      <>
        {localStorage.getItem("currentGame") ? (
          <MenuButton
            callback={handleContinueGame}
            icon={<GiSeaTurtle />}
            text="Continue Game"
          />
        ) : null}
        <MenuButton
          callback={handleNewGame}
          icon={<GiSeaTurtle />}
          text="New Game"
        />
        {localStorage.getItem("currentGame") ? (
          <span className="text-blue-800 font-light">
            Caution: Starting a new game will erase current game progress!
          </span>
        ) : null}
        <MenuButton
          callback={handleSettings}
          icon={<RiSettings5Fill />}
          text="Settings"
        />
        <MenuButton callback={handleAbout} icon={<FcAbout />} text="About" />
      </>
    ),
    settings: <Settings />,
  };
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
        {screens[mode]}
        <EditionSection />
      </div>
      {showAbout ? <AboutDialog setShowAbout={setShowAbout} /> : null}
    </>
  );
}

export default Menu;
