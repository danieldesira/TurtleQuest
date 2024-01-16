import Turtle from "../characters/turtle";

interface Options {
  upBtnId: string;
  leftBtnId: string;
  rightBtnId: string;
  downBtnId: string;
}

let upIsHeld = false;

function moveUp(mainCharacter: Turtle) {
  if (upIsHeld) {
    mainCharacter.moveUp();
  }
}

function mousedownUp(mainCharacter: Turtle) {console.log("mousedown")
    upIsHeld = true;
    moveUp(mainCharacter);
}

function mouseupUp() {
    upIsHeld = false;
}

function bindOnscreenControls(mainCharacter: Turtle, options: Options) {
  const upBtn = document.getElementById(options.upBtnId);
  const leftBtn = document.getElementById(options.leftBtnId);
  const rightBtn = document.getElementById(options.rightBtnId);
  const downBtn = document.getElementById(options.downBtnId);

  upBtn.addEventListener("mousedown", () => mousedownUp(mainCharacter));
  upBtn.addEventListener("mouseup", mouseupUp);
  leftBtn.addEventListener("click", () => mainCharacter.moveLeft());
  rightBtn.addEventListener("click", () => mainCharacter.moveRight());
  downBtn.addEventListener("click", () => mainCharacter.moveDown());
}

export default bindOnscreenControls;
