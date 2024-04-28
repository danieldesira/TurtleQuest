import Game from "../Game";

const handleKeyDown = (event: React.KeyboardEvent) => {
  const upKeys = ["w", "W", "ArrowUp"];
  const downKeys = ["s", "S", "ArrowDown"];
  const leftKeys = ["a", "A", "ArrowLeft"];
  const rightKeys = ["d", "D", "ArrowRight"];

  const mainCharacter = Game.instance.turtle;

  handleKeyGroup(upKeys, () => mainCharacter.moveUp(), event.key);
  handleKeyGroup(downKeys, () => mainCharacter.moveDown(), event.key);
  handleKeyGroup(leftKeys, () => mainCharacter.moveLeft(), event.key);
  handleKeyGroup(rightKeys, () => mainCharacter.moveRight(), event.key);
};

const handleKeyGroup = (
  keyGroup: Array<string>,
  action: Function,
  pressedKey: string
) => {
  if (keyGroup.includes(pressedKey)) {
    // Call the method twice to make up for slower triggering of keyboard events
    action();
    action();
  }
};

export default handleKeyDown;
