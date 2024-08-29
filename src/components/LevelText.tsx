import React from "react";
import { useSelector } from "react-redux";
import RootState from "../features/RootState";
import { levelMap } from "../levels/levels";

function LevelText() {
  const level = useSelector((state: RootState) => state.levels.level.value);
  const showText = !!levelMap[level];

  return (
    <>
      {showText ? <span className="font-extrabold">Level {level}</span> : null}
    </>
  );
}

export default LevelText;
