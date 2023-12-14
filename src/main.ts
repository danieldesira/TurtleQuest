import Turtle from "./characters/turtle";

const canvas = document.getElementById('canvas') as HTMLCanvasElement;
const context = canvas.getContext('2d');
const turtle = new Turtle();
turtle.paint(context);