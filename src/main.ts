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

bindControls(canvas, turtle);

async function render() {
  const level = selectLvl(currentLevel);

  if (level === true) {
    Dialog.notify({
      id: "game-over-dialog",
      title: "Game complete",
      text: ["Game complete. Congratulations!"],
    });
  } else {
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
