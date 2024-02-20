import React from "react";
import LevelText from "./LevelText";
import MeterGroup from "./meters/MeterGroup";
import XPText from "./XPText";
import NextLevelIndication from "./NextLevelIndication";

function Header() {
  return (
    <div className="fixed top-1 left-1 flex text-white gap-5 items-center">
      <MeterGroup />
      <XPText />
      <LevelText />
      <NextLevelIndication />
    </div>
  );
}

export default Header;
