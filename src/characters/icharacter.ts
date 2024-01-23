interface ICharacter {
  loadImage(): Promise<HTMLImageElement>;
  paint(context: CanvasRenderingContext2D, bgOffsetX?: number, bgOffsetY?: number): void;
  getX(): number;
  getY(): number;
  setPosition(x: number, y: number): void;
  getIsMain(): boolean;
  getIsFood(): boolean;
  getIsObstacle(): boolean;
}

export default ICharacter;
