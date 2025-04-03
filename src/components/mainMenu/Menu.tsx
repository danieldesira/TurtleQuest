import React, { useEffect, useState } from "react";
import { startGame } from "../../features/gameState/gameStateReducer";
import { useDispatch } from "react-redux";
import MenuButton from "./MenuButton";
import { GiSeaTurtle } from "react-icons/gi";
import AboutDialog from "../dialog/AboutDialog";
import EditionSection from "../EditionSection";
import Game from "../../Game";
import parseGameData from "../../restoreGame/parseGameData";
import { RiSettings5Fill } from "react-icons/ri";
import Settings from "../settings/Settings";
import { FaInstagram } from "react-icons/fa6";
import LoginButtons from "../LoginButtons";
import { fetchLastGame } from "../../services/api";
import LeaderBoard from "../LeaderBoard";

type Props = { setIsNewGame: Function };

function Menu({ setIsNewGame }: Props) {
  const dispatch = useDispatch();
  const [showAbout, setShowAbout] = useState<boolean>(false);
  const [mode, setMode] = useState<"main" | "settings">("main");
  const [lastGame, setLastGame] = useState();

  const handleNewGame = () => {
    setIsNewGame(true);
    dispatch(startGame());
    Game.instance.reset();
  };

  const handleContinueGame = () => {
    setIsNewGame(false);
    dispatch(startGame());
    parseGameData(JSON.stringify(lastGame));
  };

  const handleAbout = () => setShowAbout((_) => true);

  const handleSettings = () => setMode((_) => "settings");

  const exitSettings = () => setMode((_) => "main");

  const screens = {
    main: (
      <>
        <div className="flex flex-col gap-5">
          <div className="flex gap-5 justify-center items-center">
            <h1 className="text-5xl" role="button" onClick={handleAbout}>
              <span className="text-emerald-300">Turtle</span>{" "}
              <span className="text-cyan-500">Quest</span>
            </h1>
            <RiSettings5Fill
              className="w-14 h-14"
              role="button"
              onClick={handleSettings}
            />
            <a
              href="https://www.instagram.com/turtlequest.webgame/"
              target="_blank"
              title="Follow us on Instagram"
            >
              <FaInstagram className="w-14 h-14" />
            </a>
            <LoginButtons />
          </div>
          <span className="text-slate-950 text-center">Beta release</span>
        </div>
        <LeaderBoard />
        <div className="flex flex-col items-center gap-5">
          {lastGame ? (
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
          {lastGame ? (
            <span className="text-blue-800 font-light">
              Caution: Starting a new game will erase current game progress!
            </span>
          ) : null}
        </div>
      </>
    ),
    settings: <Settings exit={exitSettings} />,
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      fetchLastGame().then((res) => setLastGame(res));
    }
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 h-full w-full flex flex-col justify-between bg-cute bg-no-repeat bg-center p-5 items-center">
        {screens[mode]}
        <EditionSection />
      </div>
      {showAbout ? <AboutDialog setShowAbout={setShowAbout} /> : null}
    </>
  );
}

export default Menu;
