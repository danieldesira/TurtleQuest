import React, { useEffect, useRef } from "react";
import NextLevelIndication from "./NextLevelIndication";
import GameHeader from "./GameHeader";
import resizeCanvas from "../utils/resizeCanvas";
import handleKeyDown from "../controls/handleKeyDown";
import handleWheel from "../controls/handleWheel";
import Game from "../Game";

function GameSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    window.addEventListener("resize", () => resizeCanvas(canvasRef.current));

    (async () => await Game.instance.start(canvasRef.current))();
  });

  return (
    <>
      <div className="flex h-full items-center justify-center">
        <canvas
          height="400"
          width="700"
          tabIndex={1}
          ref={canvasRef}
          onKeyDown={handleKeyDown}
          onWheel={handleWheel}
        ></canvas>
      </div>
      <GameHeader />
      <NextLevelIndication />
    </>
  );
}

export default GameSection;
