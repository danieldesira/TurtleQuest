import ICharacter from "../characters/ICharacter";

interface ILevel {
  init(): Promise<HTMLImageElement>;
  get bgImgPath(): string;
  get bgImg(): HTMLImageElement;
  set bgOffsetX(offsetX: number);
  set bgOffsetY(offsetY: number);
  get bgOffsetX(): number;
  get bgOffsetY(): number;
  get characters(): Set<ICharacter>;
  paintCharacters(context: CanvasRenderingContext2D): void;
  moveCharacters(): void;
}

export default ILevel;
