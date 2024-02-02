import React, { useEffect, useRef } from "react";
import Turtle from "../characters/turtle";
import Level from "../levels/level";
import Level1 from "../levels/level1";
import { LevelChangeTypes } from "../levels/levels";
import Dialog from "../dialog/dialog";
import Background from "../background";
import selectLvl from "../levels/level-selector";
import checkTurtle from "../turtle-observer";
import handleKeyDown from "../controls/handleKeyDown";
import handleWheel from "../controls/handleWheel";

interface Props {
  turtle: Turtle;
}

function GameCanvas({ turtle }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  let currentLevel: number = 1;

  let level: Level = new Level1();
  let background: HTMLImageElement;

  const loadLevel = async (): Promise<HTMLImageElement> => {
    try {
      const background = await level.init();
      turtle.limitY = background.height;
      return background;
    } catch (error) {
      Dialog.notify({
        id: "game-error",
        title: "Error",
        text: [error],
      });
    }
  };

  const render = async (
    canvas: HTMLCanvasElement,
    context: CanvasRenderingContext2D
  ) => {
    try {
      const { levelChangeType, newLevel } = checkTurtle(turtle, {
        bgWidth: background.width,
        levelNo: currentLevel,
        level,
      });
      if (
        levelChangeType === LevelChangeTypes.SameLevel ||
        levelChangeType === LevelChangeTypes.NewLevel
      ) {
        if (levelChangeType === LevelChangeTypes.NewLevel) {
          currentLevel = newLevel;
          level = selectLvl(currentLevel);
          background = await loadLevel();
        }

        Background.paint(background, {
          canvas,
          context,
          mainCharacter: turtle,
          level,
        });

        turtle.paint(context);

        level.paintCharacters(context);

        requestAnimationFrame(() => render(canvas, context));
      } else if (levelChangeType === LevelChangeTypes.GameComplete) {
        Dialog.notify({
          id: "game-over-dialog",
          title: "Game complete",
          text: ["Game complete. Congratulations!"],
        });
      } else {
        Dialog.notify({
          id: "game-over-dialog",
          title: "You lose",
          text: ["Better luck next time!"],
        });
      }
    } catch (error) {
      Dialog.notify({
        id: "game-error",
        title: "Error",
        text: [error],
      });
    }
  };

  const resizeCanvas = (canvas: HTMLCanvasElement) => {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    Background.readjustCanvasForBg(canvas, background);
  };

  useEffect(() => {
    (async () => {
      await turtle.loadImage();
      background = await loadLevel();

      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      render(canvas, context);

      resizeCanvas(canvas);
      window.addEventListener("resize", () => resizeCanvas(canvas));
      canvas.focus();
    })();
  }, []);

  return (
    <canvas
      height="400"
      width="700"
      tabIndex={1}
      ref={canvasRef}
      onKeyDown={(event: React.KeyboardEvent) => handleKeyDown(event, turtle)}
      onWheel={(event: React.WheelEvent) => handleWheel(event, turtle)}
    ></canvas>
  );
}

export default GameCanvas;
