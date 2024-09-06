import Game from "../Game";
import { paintLevelBg } from "../levels/background";
import { LevelChangeTypes } from "../levels/levels";
import checkTurtle from "../checkTurtle";
import store from "../store";
import { updateDialogContent } from "../features/dialogs/dialogReducer";

/**
 * Animates the game frame by frame depeding on outcomes of game logic.
 * @param canvas The canvas element.
 * @author Daniel Desira
 */
const animate = async (canvas: HTMLCanvasElement) => {
  try {
    const levelChangeType = await checkTurtle();
    if (
      levelChangeType === LevelChangeTypes.SameLevel ||
      levelChangeType === LevelChangeTypes.NewLevel
    ) {
      const context = canvas.getContext("2d");

      paintLevelBg({ canvas, context });
      Game.instance.turtle.paint(context);
      Game.instance.level.paintCharacters(context);

      Game.instance.animationTimer = requestAnimationFrame(
        async () => await animate(canvas)
      );
    } else if (levelChangeType === LevelChangeTypes.GameComplete) {
      store.dispatch(
        updateDialogContent({
          dialog: {
            title: "Game Complete",
            text: ["Game complete. Congratulations!"],
          },
        })
      );

      cancelAnimationFrame(Game.instance.animationTimer);
    } else {
      store.dispatch(
        updateDialogContent({
          dialog: { title: "You lose", text: ["Better luck next time!"] },
        })
      );

      cancelAnimationFrame(Game.instance.animationTimer);
    }
  } catch (error) {
    store.dispatch(
      updateDialogContent({
        dialog: { title: "Unhandled Error", text: [error] },
      })
    );
    throw error;
  }
};

export default animate;
