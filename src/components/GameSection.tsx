import React from "react";
import handleKeyDown from "../controls/handleKeyDown";
import handleWheel from "../controls/handleWheel";
import NextLevelIndication from "./NextLevelIndication";
import GameHeader from "./GameHeader";

interface Props {
  canvasRef: React.RefObject<HTMLCanvasElement>;
}

function GameSection({ canvasRef }: Props) {
  return (
    <>
      <GameHeader />
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
      <NextLevelIndication />
    </>
  );
}

export default GameSection;
