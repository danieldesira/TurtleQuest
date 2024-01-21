interface ICharacter {
  loadImage(): Promise<HTMLImageElement>;
  paint(context: CanvasRenderingContext2D): void;
  getX(): number;
  getY(): number;
  getIsMain(): boolean;
  getIsFood(): boolean;
  getIsObstacle(): boolean;
}

export default ICharacter;
