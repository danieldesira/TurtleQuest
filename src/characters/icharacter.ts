interface ICharacter {
  loadImage(): Promise<HTMLImageElement>;
  paint(context: CanvasRenderingContext2D, bgOffsetX?: number, bgOffsetY?: number): void;
  get x(): number;
  get y(): number;
  setPosition(x: number, y: number): void;
  get isMain(): boolean;
  get isFood(): boolean;
  get isObstacle(): boolean;
  get foodValue(): number;
  get image(): HTMLImageElement;
}

export default ICharacter;
