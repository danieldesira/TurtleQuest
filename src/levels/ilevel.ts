import ICharacter from "../characters/icharacter";

interface ILevel {
  init(): Promise<HTMLImageElement>;
  get bgImgPath(): string;
  getBgImg(): HTMLImageElement;
  loadBgImg(): Promise<HTMLImageElement>;
  setBgOffset(offsetX: number, offsetY: number): void;
  get characters(): Set<ICharacter>;
  setInitialCharacterPositions(): void;
  loadCharacters(): void;
  paintCharacters(context: CanvasRenderingContext2D): void;
}

export default ILevel;
