import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import RootState from "../features/RootState";
import Menu from "./mainMenu/Menu";
import GameSection from "./GameSection";
import GameData from "../restoreGame/GameData";
import { fetchLastGame } from "../services/api";
import LoadingIndicator from "./LoadingIndicator";

const MainSection = () => {
  const gameState = useSelector((state: RootState) => state.game.state.value);
  const isAuthenticated = useSelector(
    (state: RootState) => state.authentication.isAuthenticated
  );

  const [isNewGame, setIsNewGame] = useState<boolean>(false);
  const [lastGame, setLastGame] = useState<GameData>();
  const [isGameDataLoading, setIsGameDataLoading] = useState<boolean>(
    isAuthenticated
  );

  const screens = {
    "in-progress": <GameSection isNewGame={isNewGame} gameData={lastGame} />,
    saving: <>Saving game...</>,
    menu: <Menu setIsNewGame={setIsNewGame} />,
  };

  useEffect(() => {
    fetchLastGame()
      .then((res) => setLastGame(res))
      .finally(() => setIsGameDataLoading(false));
  }, []);

  return (
    <>
      {isGameDataLoading ? (
        <LoadingIndicator message="Loading last game..." />
      ) : null}
      <div
        className="max-w-screen max-h-screen portrait:hidden"
        onContextMenu={(e) => e.preventDefault()}
      >
        {screens[gameState]}
      </div>
      <div className="landscape:hidden flex justify-center items-center bg-red-700">
        <p className="text-white">
          Unable to play game in portrait mode. Please switch your device to
          landscape mode or install the Progressive Web App in Chrome, Edge or
          Firefox with the Progressive Web App addon.
        </p>
      </div>
    </>
  );
};

export default MainSection;
