import Turtle from "./characters/turtle";
import { version } from "../package.json";
import bindControls from "./controls/controls";
import paintBackground from "./background";
import checkTurtle from "./turtle-observer";
import selectLvl from "./levels/level-selector";
import Dialog from "./dialog/dialog";

const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const context = canvas.getContext("2d");
const turtle = new Turtle();

let currentLevel: number = 1;

bindControls({
  canvas,
  mainCharacter: turtle,
  upBtnId: "upBtn",
  leftBtnId: "leftBtn",
  rightBtnId: "rightBtn",
  downBtnId: "downBtn",
});

async function render() {
  const level = selectLvl(currentLevel);

  if (level === true) {
    Dialog.notify({
      id: "game-over-dialog",
      title: "Game complete",
      text: ["Game complete. Congratulations!"],
    });
  } else {
    try {
      const background = await paintBackground({
        canvas,
        context,
        mainCharacter: turtle,
        level,
      });
      turtle.setYLimit(background.height);
      turtle.paint(context);
      currentLevel = checkTurtle(turtle, {
        bgWidth: background.width,
        currentLvl: currentLevel,
      });
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

function detectOrientation() {
  if (screen.orientation.type.startsWith("portrait")) {
    Dialog.notify({
      id: "orientation-msg",
      title: "Device settings",
      text: ["Please make sure that you hold your device in landscape mode for the best game experience."]
    });
  }
}

window.addEventListener("resize", resizeCanvas);
window.addEventListener("orientationchange", detectOrientation);
resizeCanvas();
detectOrientation();

const versionAnchor = document.getElementById("version");
versionAnchor.innerText = version;

canvas.focus();
render();

Dialog.notify({
  id: "dialog-game-welcome",
  title: "Welcome",
  text: ["Welcome to Turtle Escape!"],
});
