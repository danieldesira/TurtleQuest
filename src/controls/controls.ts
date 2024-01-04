import Turtle from "../characters/turtle";
import bindKeyboard from "./keyboard";
import bindWheel from "./touchpad";
import bindTouch from "./touchsreen";

function bindControls(canvas: HTMLCanvasElement, mainCharacter: Turtle) {
  bindKeyboard(canvas, mainCharacter);
  bindWheel(canvas, mainCharacter);
  bindTouch(canvas, mainCharacter);
}

export default bindControls;
