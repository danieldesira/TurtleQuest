import INonMainCharacter from "../characters/interfaces/INonMainCharacter";

interface ILevel {
  init(isFreshLevel: boolean): Promise<void>;
  loadBgImg(): Promise<void>;
  createCharacters(): Promise<void>;
  restoreCharacters(): Promise<void>;
  get bgImgPath(): string;
  get bgImg(): HTMLImageElement;
  set bgOffsetX(offsetX: number);
  set bgOffsetY(offsetY: number);
  get bgOffsetX(): number;
  get bgOffsetY(): number;
  get characters(): Set<INonMainCharacter>;
  get benthicOffsetY(): number;
  paintCharacters(context: CanvasRenderingContext2D): void;
  moveCharacters(): void;
  get currentSpeed(): number;
  get points(): number;
  checkIfTurtleMeetsCharacters(): void;
}

export default ILevel;
