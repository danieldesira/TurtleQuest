import Turtle from "./characters/turtle";
import { version } from "../package.json";
import bindControls from "./controls/controls";
import paintBackground from "./background";
import observeTurtle from "./turtle-observer";

const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const context = canvas.getContext("2d");
const turtle = new Turtle();

bindControls(canvas, turtle);

function render() {
  const background = paintBackground(canvas, context, turtle);
  turtle.setLimits(background.width, background.height);
  turtle.paint(context);
  observeTurtle(turtle, background.width);
  requestAnimationFrame(render);
}

function resizeCanvas() {
  canvas.height = window.innerHeight - 50;
  canvas.width = window.innerWidth;
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

const versionSpan = document.getElementById("version");
versionSpan.innerText = version;

canvas.focus();
render();
