import Turtle from "./characters/turtle";
import { version } from "../package.json";
import bindControls from "./controls/controls";
import checkTurtle from "./turtle-observer";
import selectLvl from "./levels/level-selector";
import Dialog from "./dialog/dialog";
import Background from "./background";
import Level1 from "./levels/level1";
import Level from "./levels/level";
import { LevelChangeTypes } from "./levels/levels";

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

  let level: Level = new Level1();
  let background = await loadLevel();

  Background.readjustCanvasForBg(canvas, background);

  async function loadLevel(): Promise<HTMLImageElement> {
    const background = await level.loadBgImg();
    level.setInitialCharacterPositions();
    return background;
  }

  async function render() {
    try {
      const { levelChangeType, newLevel } = checkTurtle(turtle, {
        bgWidth: background.width,
        currentLvl: currentLevel,
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
        });

        turtle.setYLimit(background.height);
        turtle.paint(context);

        updateMeters();

        requestAnimationFrame(render);
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
  }

  function resizeCanvas() {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    Background.readjustCanvasForBg(canvas, background);
  }

  function updateMeters() {
    const foodMeter = document.getElementById("foodMeter") as HTMLMeterElement;
    foodMeter.value = turtle.getFoodValue();

    const lifeMeter = document.getElementById("lifeMeter") as HTMLMeterElement;
    lifeMeter.value = turtle.getLifeValue();
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

  //@ts-ignore
  await screen.orientation.lock("landscape-primary");
})();
