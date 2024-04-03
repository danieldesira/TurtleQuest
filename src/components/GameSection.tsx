import React, { useEffect, useRef } from "react";
import NextLevelIndication from "./NextLevelIndication";
import GameHeader from "./GameHeader";
import resizeCanvas from "../utils/resizeCanvas";
import handleKeyDown from "../controls/handleKeyDown";
import handleWheel from "../controls/handleWheel";
import Game from "../Game";
import LoadingIndicator from "./LoadingIndicator";
import { useSelector } from "react-redux";
import RootState from "../features/RootState";
import ControlGroup from "./controls/ControlGroup";

function GameSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const isLevelLoading = useSelector(
    (state: RootState) => state.game.isLevelLoading.value
  );

  useEffect(() => {
    window.addEventListener("resize", () => resizeCanvas(canvasRef.current));

    (async () => await Game.instance.start(canvasRef.current))();
  }, []);

  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <canvas
          height="400"
          width="700"
          tabIndex={1}
          ref={canvasRef}
          onKeyDown={handleKeyDown}
          onWheel={handleWheel}
        ></canvas>
      </div>
      {isLevelLoading ? <LoadingIndicator /> : null}
      <GameHeader />
      <NextLevelIndication />
      <ControlGroup />
    </>
  );
}

export default GameSection;
