import Turtle from "./characters/turtle";
import {version} from "../package.json";
import bindControls from "./controls/controls";

const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const context = canvas.getContext("2d");
const turtle = new Turtle();
turtle.paint(context);

bindControls(canvas, turtle);

function paintBackground() {
  const backgroundImage = document.createElement("img");
  backgroundImage.src = "./images/background.png";
  backgroundImage.onload = () =>
    context.drawImage(
      backgroundImage,
      0,
      0,
      backgroundImage.width,
      backgroundImage.height
    );
}

function render() {
  paintBackground();
  turtle.paint(context);
  requestAnimationFrame(render);
}

const versionSpan = document.getElementById("version");
versionSpan.innerText = version;

canvas.focus();
render();
