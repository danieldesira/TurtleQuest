import React, { useEffect, useRef } from "react";
import NextLevelIndication from "./NextLevelIndication";
import GameHeader from "./GameHeader";
import resizeCanvas from "../utils/resizeCanvas";
import handleKeyDown from "../controls/handleKeyDown";
import handleWheel from "../controls/handleWheel";
import LoadingIndicator from "./LoadingIndicator";
import { useSelector } from "react-redux";
import RootState from "../features/RootState";
import ControlGroup from "./controls/ControlGroup";
import Game from "../Game";

type Props = { isNewGame: boolean };

function GameSection({ isNewGame }: Props) {
  const isLevelLoading = useSelector(
    (state: RootState) => state.game.isLevelLoading.value
  );

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    window.addEventListener("resize", () => resizeCanvas(canvas));
    Game.instance.start({ canvas, isNewGame });
  }, []);

  return (
    <div onKeyDown={handleKeyDown}>
      <div className="flex h-screen items-center justify-center">
        <canvas
          ref={canvasRef}
          height="400"
          width="700"
          tabIndex={1}
          onWheel={handleWheel}
        ></canvas>
      </div>
      {isLevelLoading ? <LoadingIndicator /> : null}
      <GameHeader />
      <NextLevelIndication />
      <ControlGroup />
    </div>
  );
}

export default GameSection;
