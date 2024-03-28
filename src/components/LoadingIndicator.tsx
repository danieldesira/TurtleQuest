import React from "react";
import { useSelector } from "react-redux";
import RootState from "../features/RootState";

function LoadingIndicator() {
  const levelNo = useSelector((state: RootState) => state.levels.level.value);

  return (
    <div className="fixed top-0 left-0 flex h-screen w-full items-center justify-center">
      <span className="text-5xl dark:text-white">Loading Level {levelNo} ...</span>
    </div>
  );
}

export default LoadingIndicator;
