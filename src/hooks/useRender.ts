import Game from "../Game";
import Background from "../Background";
import { LevelChangeTypes } from "../levels/levels";
import checkTurtle from "../checkTurtle";
import store from "../store";
import { updateDialogContent } from "../features/dialogs/dialogReducer";

interface Options {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
}

let levelChangeType: LevelChangeTypes;

const render = async ({ canvas, context }: Options) => {
  try {
    if (store.getState().game.inProgress.value) {
      levelChangeType = await checkTurtle();
      if (
        levelChangeType === LevelChangeTypes.SameLevel ||
        levelChangeType === LevelChangeTypes.NewLevel
      ) {
        Background.paint({ canvas, context });
        Game.instance.turtle.paint(context);
        Game.instance.level.paintCharacters(context);
      }
    } else {
      if (levelChangeType === LevelChangeTypes.GameComplete) {
        store.dispatch(
          updateDialogContent({
            dialog: {
              title: "Game Complete",
              text: ["Game complete. Congratulations!"],
            },
          })
        );
        Game.instance.showWinVideo(context);
      } else {
        store.dispatch(
          updateDialogContent({
            dialog: { title: "You lose", text: ["Better luck next time!"] },
          })
        );
      }
    }
  } catch (error) {
    store.dispatch(
      updateDialogContent({
        dialog: { title: "Unhandled Error", text: [error] },
      })
    );
    throw error;
  }
  requestAnimationFrame(() => render({ canvas, context }));
};

const useRender = () => render;

export default useRender;
