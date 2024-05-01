import Directions from "../../enums/Directions";

interface ICharacter {
  loadImage(): Promise<HTMLImageElement>;
  paint(context: CanvasRenderingContext2D, bgOffsetX?: number, bgOffsetY?: number): void;
  get x(): number;
  get y(): number;
  set x(x: number);
  set y(y: number);
  get image(): HTMLImageElement;
  get height(): number;
  get width(): number;
  get direction(): Directions;
  set direction(direction: Directions);
}

export default ICharacter;
