import ICharacter from "../characters/ICharacter";

interface ILevel {
  init(): Promise<HTMLImageElement>;
  get bgImgPath(): string;
  get bgImg(): HTMLImageElement;
  set bgOffsetX(offsetX: number);
  set bgOffsetY(offsetY: number);
  get characters(): Set<ICharacter>;
  paintCharacters(context: CanvasRenderingContext2D): void;
}

export default ILevel;
