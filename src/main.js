import Turtle from "./characters/turtle";

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const turtle = new Turtle();
turtle.paint(context);