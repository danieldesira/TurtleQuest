import React, { useEffect, useRef } from "react";
import handleKeyDown from "../controls/handleKeyDown";
import handleWheel from "../controls/handleWheel";
import useRender from "../hooks/useRender";
import useResizeCanvas from "../hooks/useResizeCanvas";
import Game from "../Game";
import PlayAgainButton from "./PlayAgainButton";

function GameCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const render = useRender();
  const resizeCanvas = useResizeCanvas();

  useEffect(() => {
    (async () => {
      await Game.instance.turtle.loadImage();
      await Game.instance.loadNewLevel();

      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      await render({ canvas, context });

      window.addEventListener("resize", () => resizeCanvas(canvas));
      resizeCanvas(canvas);

      canvas.focus();
    })();
  }, []);

  return (
    <>
      <PlayAgainButton
        render={async () =>
          await render({
            canvas: canvasRef.current,
            context: canvasRef.current.getContext("2d"),
          })
        }
      />
      <canvas
        height="400"
        width="700"
        tabIndex={1}
        ref={canvasRef}
        onKeyDown={handleKeyDown}
        onWheel={handleWheel}
      ></canvas>
    </>
  );
}

export default GameCanvas;
