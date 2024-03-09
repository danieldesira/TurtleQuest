import React, { useEffect, useRef } from "react";
import handleKeyDown from "../controls/handleKeyDown";
import handleWheel from "../controls/handleWheel";
import useRender from "../hooks/useRender";
import useResizeCanvas from "../hooks/useResizeCanvas";
import Game from "../Game";
import PlayAgainButton from "./PlayAgainButton";
import NextLevelIndication from "./NextLevelIndication";
import { useSelector } from "react-redux";
import RootState from "../features/RootState";

function GameCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const render = useRender();
  const resizeCanvas = useResizeCanvas();
  const inProgress = useSelector(
    (state: RootState) => state.game.inProgress.value
  );

  const startGame = async () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    await render({ canvas, context });
    resizeCanvas(canvas);
  };

  useEffect(() => {
    (async () => {
      await Game.instance.turtle.loadImage();
      await Game.instance.loadNewLevel();
      await startGame();

      window.addEventListener("resize", () => resizeCanvas(canvasRef.current));
    })();
  });

  return (
    <>
      {inProgress ? (
        <>
          <canvas
            height="400"
            width="700"
            tabIndex={1}
            ref={canvasRef}
            onKeyDown={handleKeyDown}
            onWheel={handleWheel}
          ></canvas>
          <NextLevelIndication />
        </>
      ) : (
        <>
          <video
            className="max-h-screen max-w-screen m-auto"
            src="./static/videos/baby-turtles.mp4"
            autoPlay
            loop
          />
          <PlayAgainButton render={async () => await startGame()} />
        </>
      )}
    </>
  );
}

export default GameCanvas;
