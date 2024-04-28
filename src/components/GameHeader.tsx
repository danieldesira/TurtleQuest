import React from "react";
import LevelText from "./LevelText";
import MeterGroup from "./meters/MeterGroup";
import XPText from "./XPText";
import BackButton from "./BackButton";

function GameHeader() {
  return (
    <div className="fixed top-1 left-1 flex dark:text-white gap-5 items-center">
      <BackButton />
      <MeterGroup />
      <XPText />
      <LevelText />
    </div>
  );
}

export default GameHeader;
