interface ICharacter {
  loadImage(): Promise<HTMLImageElement>;
  paint(context: CanvasRenderingContext2D): void;
  getX(): number;
  getY(): number;
  setPosition(x: number, y: number): void;
  getIsMain(): boolean;
  getIsFood(): boolean;
  getIsObstacle(): boolean;
}

export default ICharacter;
