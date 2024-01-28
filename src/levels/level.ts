import ICharacter from "../characters/icharacter";
import ILevel from "./ilevel";

abstract class Level implements ILevel {
  protected abstract _backgroundImagePath: string;
  protected _backgroundImage: HTMLImageElement;
  protected abstract _characters: Set<ICharacter>;
  protected _bgOffsetX: number;
  protected _bgOffsetY: number;

  async init(): Promise<HTMLImageElement> {
    await this.loadBgImg();
    await this.loadCharacters();
    this.setInitialCharacterPositions();
    return this._backgroundImage;
  }
  
  loadBgImg(): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
      const backgroundImage = document.createElement("img");
      backgroundImage.src = this._backgroundImagePath;
      backgroundImage.onload = () => {
        this._backgroundImage = backgroundImage;
        resolve(backgroundImage);
      };
      backgroundImage.onerror = () =>
      reject(new Error("Could not load level background"));
    });
  }

  setBgOffset(offsetX: number, offsetY: number): void {
    this._bgOffsetX = offsetX;
    this._bgOffsetY = offsetY;
  }
  
  get bgImgPath() {
    return this._backgroundImagePath;
  }
  
  getBgImg = () => this._backgroundImage;
  
  get characters() {
    return this._characters;
  }

  setInitialCharacterPositions(): void {
    for (const character of this._characters) {
      const x = Math.random() * this._backgroundImage.width;
      const y = Math.random() * this._backgroundImage.height;
      character.setPosition(x, y);
    }
  }

  async loadCharacters(): Promise<void> {
    for (const character of this.characters) {
      await character.loadImage();
    }
  }

  paintCharacters(context: CanvasRenderingContext2D): void {
    for (const character of this.characters) {
      character.paint(context, this._bgOffsetX, this._bgOffsetY);
    }
  }
}

export default Level;
