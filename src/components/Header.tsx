import React from "react";
import LevelText from "./LevelText";
import MeterGroup from "./meters/MeterGroup";
import XPText from "./XPText";

function Header() {
  return (
    <div className="fixed top-1 left-1 flex text-white gap-5 items-center">
      <MeterGroup />
      <XPText />
      <LevelText />
    </div>
  );
}

export default Header;
