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

  useEffect(() => {
    (async () => {
      await Game.instance.turtle.loadImage();
      await Game.instance.loadNewLevel();

      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      await render({ canvas, context });

      window.addEventListener("resize", () => resizeCanvas(canvas));
      resizeCanvas(canvas);
    })();
  }, []);

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
          <PlayAgainButton
            render={async () =>
              await render({
                canvas: canvasRef.current,
                context: canvasRef.current.getContext("2d"),
              })
            }
          />
        </>
      )}
    </>
  );
}

export default GameCanvas;
