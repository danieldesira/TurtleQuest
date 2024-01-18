import Turtle from "./characters/turtle";
import { version } from "../package.json";
import bindControls from "./controls/controls";
import checkTurtle from "./turtle-observer";
import selectLvl from "./levels/level-selector";
import Dialog from "./dialog/dialog";
import Background from "./background";
import Level1 from "./levels/level1";
import Level from "./levels/level";

(async () => {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement;
  const context = canvas.getContext("2d");
  const turtle = new Turtle();
  await turtle.loadImage();
  
  let currentLevel: number = 1;

  bindControls({
    canvas,
    mainCharacter: turtle,
    upBtnId: "upBtn",
    leftBtnId: "leftBtn",
    rightBtnId: "rightBtn",
    downBtnId: "downBtn",
  });

  let level: Level | true = new Level1();
  let background: HTMLImageElement = await Background.load({
    canvas,
    context,
    mainCharacter: turtle,
    level,
  });

  async function render() {
    level = selectLvl(currentLevel);

    if (level === true) {
      Dialog.notify({
        id: "game-over-dialog",
        title: "Game complete",
        text: ["Game complete. Congratulations!"],
      });
    } else {
      try {
        const newBackground = await checkTurtle(turtle, {
          bgWidth: background.width,
          currentLvl: currentLevel,
        });
        if (newBackground) {
          background = newBackground;
          Background.readjustCanvasForBg(canvas, background);
        }

        Background.paint(background, {
          canvas,
          context,
          mainCharacter: turtle,
        });

        turtle.setYLimit(background.height);
        turtle.paint(context);

        requestAnimationFrame(render);
      } catch (error) {
        Dialog.notify({
          id: "game-error",
          title: "Error",
          text: [error],
        });
      }
    }
  }

  function resizeCanvas() {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
  }

  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();

  const versionAnchor = document.getElementById("version");
  versionAnchor.innerText = version;

  canvas.focus();
  render();

  Dialog.notify({
    id: "dialog-game-welcome",
    title: "Welcome",
    text: ["Welcome to Turtle Escape!"],
  });
})();
