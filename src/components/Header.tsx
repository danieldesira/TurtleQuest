import React from "react";
import LevelText from "./LevelText";
import MeterGroup from "./meters/MeterGroup";

function Header() {
  return (
    <div className="fixed top-1 left-1 flex text-white gap-5">
      <MeterGroup />
      <LevelText />
    </div>
  );
}

export default Header;
