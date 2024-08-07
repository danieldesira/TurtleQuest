import React, { useState } from "react";
import { useSelector } from "react-redux";
import RootState from "../features/RootState";
import Menu from "./mainMenu/Menu";
import GameSection from "./GameSection";
import CustomDialog from "./dialog/CustomDialog";

function MainSection() {
  const inProgress = useSelector(
    (state: RootState) => state.game.inProgress.value
  );
  const [isNewGame, setIsNewGame] = useState<boolean>(false);

  return (
    <div
      className="max-w-screen max-h-screen select-none portrait:rotate-90"
      onContextMenu={(e) => e.preventDefault()}
    >
      {inProgress ? (
        <GameSection isNewGame={isNewGame} />
      ) : (
        <Menu setIsNewGame={setIsNewGame} />
      )}
      <CustomDialog />
    </div>
  );
}

export default MainSection;
