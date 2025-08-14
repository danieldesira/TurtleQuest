import { Direction } from "../../constants";

interface ICharacter {
  loadImage(): Promise<void>;
  paint(
    context: CanvasRenderingContext2D,
    bgOffsetX?: number,
    bgOffsetY?: number
  ): void;
  get x(): number;
  get y(): number;
  set x(x: number);
  set y(y: number);
  get image(): HTMLImageElement;
  get height(): number;
  get width(): number;
  get direction(): Direction;
  set direction(direction: Direction);
  get imagePath(): string;
}

export default ICharacter;
