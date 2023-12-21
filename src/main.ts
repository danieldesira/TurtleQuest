import Turtle from "./characters/turtle";
import bindKeyboard from "./controls/keyboard";

const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const context = canvas.getContext("2d");
const turtle = new Turtle();
turtle.paint(context);

bindKeyboard(canvas, turtle);

function render() {
  //context.clearRect(0, 0, canvas.width, canvas.height);
  turtle.paint(context);
  requestAnimationFrame(render);
}

render();
