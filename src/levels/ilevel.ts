import ICharacter from "../characters/icharacter";

interface ILevel {
  getBgImgPath(): string;
  getBgImg(): HTMLImageElement;
  loadBgImg(): Promise<HTMLImageElement>;
  setBgOffset(offsetX: number, offsetY: number): void;
  getCharacters(): Set<ICharacter>;
  setInitialCharacterPositions(): void;
  loadCharacters(): void;
  paintCharacters(context: CanvasRenderingContext2D): void;
}

export default ILevel;
