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
      <div className="items-center">
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
      </div>
    ),
    settings: <Settings exit={() => setMode("main")} />,
  };

  return (
    <>
      <div className="fixed top-0 left-0 h-full w-full flex flex-col gap-5 justify-center p-0 bg-cute bg-no-repeat bg-center">
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
