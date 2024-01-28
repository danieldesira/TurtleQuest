interface ICharacter {
  loadImage(): Promise<HTMLImageElement>;
  paint(context: CanvasRenderingContext2D, bgOffsetX?: number, bgOffsetY?: number): void;
  get x(): number;
  get y(): number;
  set x(x: number);
  set y(y: number);
  get isMain(): boolean;
  get isPrey(): boolean;
  get isObstacle(): boolean;
  get foodValue(): number;
  get image(): HTMLImageElement;
}

export default ICharacter;
