import Turtle from "../characters/turtle";

interface Options {
  upBtnId: string;
  leftBtnId: string;
  rightBtnId: string;
  downBtnId: string;
}

let timer = 0;

function mousedown(mainCharacter: Turtle, callback: Function) {
    callback();
    timer = requestAnimationFrame(() => mousedown(mainCharacter, callback));
}

function mouseup() {
  cancelAnimationFrame(timer);
}

function bindOnscreenControls(mainCharacter: Turtle, options: Options) {
  const upBtn = document.getElementById(options.upBtnId) as HTMLButtonElement;
  const leftBtn = document.getElementById(options.leftBtnId) as HTMLButtonElement;
  const rightBtn = document.getElementById(options.rightBtnId) as HTMLButtonElement;
  const downBtn = document.getElementById(options.downBtnId) as HTMLButtonElement;

  bindControl(mainCharacter, upBtn, () => mainCharacter.moveUp());
  bindControl(mainCharacter, leftBtn, () => mainCharacter.moveLeft());
  bindControl(mainCharacter, rightBtn, () => mainCharacter.moveRight());
  bindControl(mainCharacter, downBtn, () => mainCharacter.moveDown());
}

function bindControl(mainCharacter: Turtle, btn: HTMLButtonElement, callback: Function) {
  btn.addEventListener("mousedown", () => mousedown(mainCharacter, callback));
  btn.addEventListener("mouseup", mouseup);
  btn.addEventListener("mouseleave", mouseup);
  btn.addEventListener("touchstart", () => mousedown(mainCharacter, callback));
  btn.addEventListener("touchend", mouseup);
}

export default bindOnscreenControls;
