import Turtle from "../characters/turtle";
import bindKeyboard from "./keyboard";
import bindOnscreenControls from "./onscreen";
import bindWheel from "./touchpad";

interface Options {
  canvas: HTMLCanvasElement;
  mainCharacter: Turtle;
  upBtnId?: string;
  leftBtnId?: string;
  rightBtnId?: string;
  downBtnId?: string;
}

function bindControls(options: Options) {
  const {
    canvas,
    mainCharacter,
    upBtnId,
    leftBtnId,
    rightBtnId,
    downBtnId,
  } = options;
  bindKeyboard(canvas, mainCharacter);
  bindWheel(canvas, mainCharacter);
  bindOnscreenControls(mainCharacter, {
    upBtnId,
    leftBtnId,
    rightBtnId,
    downBtnId,
  });
}

export default bindControls;
