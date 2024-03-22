import React from "react";
import LevelText from "./LevelText";
import MeterGroup from "./meters/MeterGroup";
import XPText from "./XPText";

function GameHeader() {
  return (
    <div className="fixed top-1 left-1 flex dark:text-white gap-5 items-center">
      <MeterGroup />
      <XPText />
      <LevelText />
    </div>
  );
}

export default GameHeader;
