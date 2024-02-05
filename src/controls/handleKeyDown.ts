import Game from "../Game";

const handleKeyDown = (event: React.KeyboardEvent) => {
  const upKeys = ["w", "W", "ArrowUp"];
  const downKeys = ["s", "S", "ArrowDown"];
  const leftKeys = ["a", "A", "ArrowLeft"];
  const rightKeys = ["d", "D", "ArrowRight"];

  const mainCharacter = Game.instance.turtle;

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
};

export default handleKeyDown;
