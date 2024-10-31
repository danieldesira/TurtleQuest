import React, { useState } from "react";
import { useSelector } from "react-redux";
import RootState from "../features/RootState";
import Menu from "./mainMenu/Menu";
import GameSection from "./GameSection";

function MainSection() {
  const inProgress = useSelector(
    (state: RootState) => state.game.inProgress.value
  );

  const [isNewGame, setIsNewGame] = useState<boolean>(false);

  return (
    <>
      <div
        className="max-w-screen max-h-screen portrait:hidden"
        onContextMenu={(e) => e.preventDefault()}
      >
        {inProgress ? (
          <GameSection isNewGame={isNewGame} />
        ) : (
          <Menu setIsNewGame={setIsNewGame} />
        )}
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
}

export default MainSection;
