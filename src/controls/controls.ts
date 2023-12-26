import Turtle from "../characters/turtle";
import bindKeyboard from "./keyboard";
import bindMouse from "./mouse";

function bindControls(canvas: HTMLCanvasElement, mainCharacter: Turtle) {
  bindKeyboard(canvas, mainCharacter);
  bindMouse(canvas, mainCharacter);
}

export default bindControls;
