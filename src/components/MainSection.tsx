import React from "react";
import { useSelector } from "react-redux";
import RootState from "../features/RootState";
import Menu from "./mainMenu/Menu";
import GameSection from "./GameSection";

function MainSection() {
  const inProgress = useSelector(
    (state: RootState) => state.game.inProgress.value
  );

  return (
    <div className="portrait:rotate-90 max-w-screen max-h-screen">
      {inProgress ? <GameSection /> : <Menu />}
    </div>
  );
}

export default MainSection;
