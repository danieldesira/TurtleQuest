import React from "react";
import { useSelector } from "react-redux";
import RootState from "../features/RootState";
import Menu from "./mainMenu/Menu";
import GameSection from "./GameSection";

function MainSection() {
  const inProgress = useSelector(
    (state: RootState) => state.game.inProgress.value
  );
  let isNewGame: boolean = false;

  return (
    <div
      className="portrait:rotate-90 max-w-screen max-h-screen select-none"
      onContextMenu={(e) => e.preventDefault()}
    >
      {inProgress ? (
        <GameSection isNewGame={isNewGame} />
      ) : (
        <Menu isNewGame={isNewGame} />
      )}
    </div>
  );
}

export default MainSection;
