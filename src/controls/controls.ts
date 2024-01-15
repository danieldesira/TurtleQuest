import Turtle from "../characters/turtle";
import bindKeyboard from "./keyboard";
import bindWheel from "./touchpad";

function bindControls(canvas: HTMLCanvasElement, mainCharacter: Turtle) {
  bindKeyboard(canvas, mainCharacter);
  bindWheel(canvas, mainCharacter);
}

export default bindControls;
