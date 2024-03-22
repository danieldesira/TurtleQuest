import React from "react";
import PlayButton from "./PlayButton";
import Game from "../Game";
import useRender from "../hooks/useRender";
import useResizeCanvas from "../hooks/useResizeCanvas";

interface Props {
  canvasRef: React.RefObject<HTMLCanvasElement>;
}

function Menu({ canvasRef }: Props) {
  const render = useRender();
  const resizeCanvas = useResizeCanvas();

  const startGame = async () => {
    const canvas = canvasRef.current;
    await Game.instance.turtle.loadImage();
    await Game.instance.loadNewLevel();
    await render(canvas);
    resizeCanvas(canvas);
  };

  return (
    <>
      <video
        className="max-h-screen max-w-screen m-auto"
        src="./static/videos/baby-turtles.mp4"
        autoPlay
        loop
        muted
      />
      <div className="fixed top-0 left-0 h-full flex flex-col items-center justify-center w-full gap-2">
        <h1>
          <span className="text-emerald-300">Turtle</span>{" "}
          <span className="text-cyan-500">Quest</span>
        </h1>
        <PlayButton render={async () => await startGame()} />
      </div>
    </>
  );
}

export default Menu;
