import ICharacter from "./icharacter";

abstract class Character implements ICharacter {
  protected x: number;
  protected y: number;
  protected isMain: boolean;
  protected isFood: boolean;
  protected isObstacle: boolean;
  protected image: HTMLImageElement;
  protected imagePath: string;

  loadImage(): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
        const image = document.createElement("img");
        image.src = this.imagePath;
        image.onload = () => {
          this.image = image;
          resolve(image);
        };
        image.onerror = () =>
          reject(new Error("Failed to load turtle image"));
      });
  }

  paint(context: CanvasRenderingContext2D): void {
    throw new Error("Method not implemented.");
  }

  getX = () => this.x;
  getY = () => this.y;
  getIsMain = () => this.isMain;
  getIsFood = () => this.isFood;
  getIsObstacle = () => this.isObstacle;

  setPosition(x: number, y: number): void {
    this.x = x;
    this.y = y;
  }
}

export default Character;
