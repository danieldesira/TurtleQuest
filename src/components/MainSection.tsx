import React, { useEffect, useRef } from "react";
import useResizeCanvas from "../hooks/useResizeCanvas";
import { useSelector } from "react-redux";
import RootState from "../features/RootState";
import Menu from "./Menu";
import GameSection from "./GameSection";

function MainSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const resizeCanvas = useResizeCanvas();
  const inProgress = useSelector(
    (state: RootState) => state.game.inProgress.value
  );
  
  useEffect(() => {
    window.addEventListener("resize", () => resizeCanvas(canvasRef.current));
  });

  return (
    <>
      {inProgress ? <GameSection canvasRef={canvasRef} /> : <Menu canvasRef={canvasRef} />}
    </>
  );
}

export default MainSection;
