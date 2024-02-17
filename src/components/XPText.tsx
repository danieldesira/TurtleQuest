import React from "react";
import { useSelector } from "react-redux";
import RootState from "../features/RootState";

function XPText() {
  const xp = useSelector(
    (state: RootState) => state.turtleMonitor.turtle.xp.value
  );
  return <span className="font-extrabold">{xp} XP</span>;
}

export default XPText;
