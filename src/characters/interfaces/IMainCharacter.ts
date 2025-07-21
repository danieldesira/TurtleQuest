import { Direction } from "../../constants";

interface IMainCharacter {
  resetPosition(): void;
  get direction(): Direction;
  moveUp(): void;
  moveDown(): void;
  moveLeft(): void;
  moveRight(): void;
}

export default IMainCharacter;
