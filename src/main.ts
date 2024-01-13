import Turtle from "./characters/turtle";
import { version } from "../package.json";
import bindControls from "./controls/controls";
import paintBackground from "./background";
import checkTurtle from "./turtle-observer";
import selectLvl from "./levels/level-selector";

const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const context = canvas.getContext("2d");
const turtle = new Turtle();

let currentLevel: number = 1;

bindControls(canvas, turtle);

function render() {
  const level = selectLvl(currentLevel);

  if (level === true) {
    alert("Game complete! Demo for now.. Replace later.");
  } else {
    const background = paintBackground({
      canvas,
      context,
      mainCharacter: turtle,
      level,
    });
    turtle.setLimits(background.width, background.height);
    turtle.paint(context);
    currentLevel = checkTurtle(turtle, {
      bgWidth: background.width,
      currentLvl: currentLevel,
    });
    requestAnimationFrame(render);
  }
}

function resizeCanvas() {
  canvas.height = window.innerHeight - 50;
  canvas.width = window.innerWidth;
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();

const versionSpan = document.getElementById("version");
versionSpan.innerText = version;

canvas.focus();
render();
