import Turtle from "../characters/turtle";

function handleKeyDown(event: React.KeyboardEvent, mainCharacter: Turtle) {
  const upKeys = ["w", "W", "ArrowUp"];
  const downKeys = ["s", "S", "ArrowDown"];
  const leftKeys = ["a", "A", "ArrowLeft"];
  const rightKeys = ["d", "D", "ArrowRight"];

  if (upKeys.includes(event.key)) {
    mainCharacter.moveUp();
  }

  if (downKeys.includes(event.key)) {
    mainCharacter.moveDown();
  }

  if (leftKeys.includes(event.key)) {
    mainCharacter.moveLeft();
  }

  if (rightKeys.includes(event.key)) {
    mainCharacter.moveRight();
  }
}

export default handleKeyDown;
