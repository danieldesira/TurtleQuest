import Turtle from "./characters/turtle";
import { version } from "../package.json";
import bindControls from "./controls/controls";
import paintBackground from "./background";

const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const context = canvas.getContext("2d");
const turtle = new Turtle();

bindControls(canvas, turtle);

function render() {
  const background = paintBackground(canvas, context, turtle);
  turtle.setLimits(background.width, background.height);
  turtle.paint(context);
  requestAnimationFrame(render);
}

const versionSpan = document.getElementById("version");
versionSpan.innerText = version;

canvas.focus();
render();
