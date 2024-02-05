import Game from "../Game";
import Background from "../Background";
import Dialog from "../dialog/dialog";
import { LevelChangeTypes } from "../levels/levels";
import checkTurtle from "../checkTurtle";

interface Options {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
}

const render = async ({ canvas, context }: Options) => {
  try {
    const levelChangeType = await checkTurtle();
    if (
      levelChangeType === LevelChangeTypes.SameLevel ||
      levelChangeType === LevelChangeTypes.NewLevel
    ) {
      Background.paint({ canvas, context });

      Game.instance.turtle.paint(context);

      Game.instance.level.paintCharacters(context);

      requestAnimationFrame(() => render({ canvas, context }));
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
    throw error;
  }
};

const useRender = () => render;

export default useRender;
