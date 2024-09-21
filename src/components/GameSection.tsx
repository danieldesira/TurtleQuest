import React, { useEffect, useRef } from "react";
import NextLevelIndication from "./NextLevelIndication";
import GameHeader from "./GameHeader";
import resizeCanvas from "../utils/resizeCanvas";
import handleKeyDown from "../controls/handleKeyDown";
import handleWheel from "../controls/handleWheel";
import LoadingIndicator from "./LoadingIndicator";
import { useDispatch, useSelector, useStore } from "react-redux";
import RootState from "../features/RootState";
import ControlGroup from "./controls/ControlGroup";
import Game from "../Game";
import animate from "../utils/animate";
import { updateDialogContent } from "../features/dialogs/dialogReducer";
import { stopGame } from "../features/gameState/gameStateReducer";

type Props = { isNewGame: boolean };

function GameSection({ isNewGame }: Props) {
  const isLevelLoading = useSelector(
    (state: RootState) => state.game.isLevelLoading.value
  );

  const dispatch = useDispatch();

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleBeforeUnload = (event: Event) => {
    // Display default dialog before closing
    event.preventDefault();
    event.returnValue = false; // Required by Chrome
  };

  useEffect(() => {
    const canvas = canvasRef.current;

    window.addEventListener("resize", () => resizeCanvas(canvas));
    window.addEventListener("beforeunload", handleBeforeUnload);

    Game.instance
      .start({ canvas, isNewGame })
      .then(async () => await animate(canvas))
      .catch((error) => {
        dispatch(
          updateDialogContent({ dialog: { title: "Error", text: [error] } })
        );
        dispatch(stopGame());
      });

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);

      if (Game.instance.animationTimer) {
        cancelAnimationFrame(Game.instance.animationTimer);
      }
    };
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
