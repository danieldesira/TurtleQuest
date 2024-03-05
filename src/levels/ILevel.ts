import NonMain from "../characters/abstract/NonMain";

interface ILevel {
  init(): Promise<void>;
  get bgImgPath(): string;
  get bgImg(): HTMLImageElement;
  set bgOffsetX(offsetX: number);
  set bgOffsetY(offsetY: number);
  get bgOffsetX(): number;
  get bgOffsetY(): number;
  get characters(): Set<NonMain>;
  get benthicOffsetY(): number;
  paintCharacters(context: CanvasRenderingContext2D): void;
  moveCharacters(): void;
}

export default ILevel;
