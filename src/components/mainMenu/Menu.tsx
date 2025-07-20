import React, { Dispatch, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MenuButton from "./MenuButton";
import AboutDialog from "../dialog/AboutDialog";
import EditionSection from "../EditionSection";
import Game from "../../Game";
import parseGameData from "../../restoreGame/parseGameData";
import { FaInstagram } from "react-icons/fa6";
import LoginButtons from "../LoginButtons";
import LeaderBoard from "../scores/LeaderBoard";
import RootState from "../../features/RootState";
import InfoDisplay from "../InfoDisplay";
import { triggerGameMode } from "../../features/gameState/gameStateReducer";
import GameData from "../../restoreGame/GameData";

type Props = { setIsNewGame: Dispatch<React.SetStateAction<boolean>> };

const Menu = ({ setIsNewGame }: Props) => {
  const dispatch = useDispatch();
  const [showAbout, setShowAbout] = useState<boolean>(false);
  const isAuthenticated = useSelector(
    (state: RootState) => state.authentication.isAuthenticated
  );

  const lastGame = JSON.parse(
    localStorage.getItem("lastGame") || "{}"
  ) as GameData;

  const handleNewGame = () => {
    setIsNewGame(true);
    dispatch(triggerGameMode());
    Game.instance.reset();
  };

  const handleContinueGame = () => {
    setIsNewGame(false);
    dispatch(triggerGameMode());
    parseGameData(JSON.stringify(lastGame));
  };

  const handleAbout = () => setShowAbout(true);

  return (
    <>
      <div className="fixed top-0 left-0 h-full w-full flex flex-col justify-between bg-cute bg-no-repeat bg-center p-5 items-center">
        <div className="flex flex-col gap-5">
          <div className="flex gap-5 justify-center items-center">
            <h1 className="text-5xl" role="button" onClick={handleAbout}>
              <span className="text-emerald-300">Turtle</span>{" "}
              <span className="text-cyan-500">Quest</span>
            </h1>
            <a
              href="https://www.instagram.com/turtlequest.webgame/"
              target="_blank"
              title="Follow us on Instagram"
            >
              <FaInstagram className="text-4xl" />
            </a>
            <LoginButtons />
          </div>
          <span className="text-slate-950 text-center">Beta release</span>
        </div>
        {isAuthenticated ? (
          <InfoDisplay title="Leaderboard" content={<LeaderBoard />} />
        ) : null}
        <div className="flex flex-col items-center gap-5">
          {lastGame && (
            <MenuButton callback={handleContinueGame} text="Continue Game" />
          )}
          <MenuButton callback={handleNewGame} text="New Game" />
          {lastGame && (
            <span className="text-blue-800 font-light">
              Caution: Starting a new game will erase current game progress!
            </span>
          )}
        </div>
        <EditionSection />
      </div>
      {showAbout ? <AboutDialog setShowAbout={setShowAbout} /> : null}
    </>
  );
};

export default Menu;
