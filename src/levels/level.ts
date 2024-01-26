import ICharacter from "../characters/icharacter";
import ILevel from "./ilevel";

abstract class Level implements ILevel {
  protected abstract backgroundImagePath: string;
  protected backgroundImage: HTMLImageElement;
  protected abstract characters: Set<ICharacter>;
  protected bgOffsetX: number;
  protected bgOffsetY: number;
  
  loadBgImg(): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
      const backgroundImage = document.createElement("img");
      backgroundImage.src = this.backgroundImagePath;
      backgroundImage.onload = () => {
        this.backgroundImage = backgroundImage;
        resolve(backgroundImage);
      };
      backgroundImage.onerror = () =>
      reject(new Error("Could not load level background"));
    });
  }

  setBgOffset(offsetX: number, offsetY: number): void {
    this.bgOffsetX = offsetX;
    this.bgOffsetY = offsetY;
  }
  
  getBgImgPath = () => this.backgroundImagePath;
  getBgImg = () => this.backgroundImage;
  getCharacters = () => this.characters;

  setInitialCharacterPositions(): void {
    for (const character of this.characters) {
      const x = Math.random() * this.backgroundImage.width;
      const y = Math.random() * this.backgroundImage.height;
      character.setPosition(x, y);console.log(`set position for character: ${character.x}, ${character.y}`)
    }
  }

  async loadCharacters(): Promise<void> {
    for (const character of this.characters) {
      await character.loadImage();
    }
  }

  paintCharacters(context: CanvasRenderingContext2D): void {
    for (const character of this.characters) {
      character.paint(context, this.bgOffsetX, this.bgOffsetY);
    }
  }
}

export default Level;
