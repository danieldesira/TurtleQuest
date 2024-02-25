import Directions from "../../enums/Directions";

interface IMainCharacter {
  resetPosition(): void; 
  get direction(): Directions;
  moveUp(): void;
  moveDown(): void;
  moveLeft(): void;
  moveRight(): void;
}

export default IMainCharacter;
