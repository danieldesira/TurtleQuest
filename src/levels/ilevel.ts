import ICharacter from "../characters/icharacter";

interface ILevel {
  getBgImgPath(): string;
  getBgImg(): HTMLImageElement;
  loadBgImg(): Promise<HTMLImageElement>;
  getCharacters(): Set<ICharacter>;
  setInitialCharacterPositions(): void;
}

export default ILevel;
