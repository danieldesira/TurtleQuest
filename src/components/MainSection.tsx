import React, { useEffect, useRef } from "react";
import handleKeyDown from "../controls/handleKeyDown";
import handleWheel from "../controls/handleWheel";
import useRender from "../hooks/useRender";
import useResizeCanvas from "../hooks/useResizeCanvas";
import Game from "../Game";
import NextLevelIndication from "./NextLevelIndication";
import { useSelector } from "react-redux";
import RootState from "../features/RootState";
import Menu from "./Menu";

function MainSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const render = useRender();
  const resizeCanvas = useResizeCanvas();
  const inProgress = useSelector(
    (state: RootState) => state.game.inProgress.value
  );

  const startGame = async () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    await Game.instance.turtle.loadImage();
    await Game.instance.loadNewLevel();
    await render({ canvas, context });
    resizeCanvas(canvas);
  };

  useEffect(() => {
    window.addEventListener("resize", () => resizeCanvas(canvasRef.current));
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
      ) : <Menu startGame={startGame} />}
    </>
  );
}

export default MainSection;
