import ICharacter from "../characters/icharacter";
import ILevel from "./ilevel";

abstract class Level implements ILevel {
  protected abstract _backgroundImagePath: string;
  protected _backgroundImage: HTMLImageElement;
  protected abstract _characters: Set<ICharacter>;
  protected _bgOffsetX: number;
  protected _bgOffsetY: number;

  async init(): Promise<HTMLImageElement> {
    try {
      await this.loadBgImg();
      await this.loadCharacters();
      this.setInitialCharacterPositions();
      return this._backgroundImage;
    } catch (error) {
      throw error;
    }
  }

  private loadBgImg(): Promise<HTMLImageElement> {
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

  set bgOffsetX(offsetX: number) {
    this._bgOffsetX = offsetX;
  }

  set bgOffsetY(offsetY: number) {
    this._bgOffsetY = offsetY;
  }

  get bgImgPath() {
    return this._backgroundImagePath;
  }

  get bgImg() {
    return this._backgroundImage;
  }

  get characters() {
    return this._characters;
  }

  private setInitialCharacterPositions(): void {
    for (const character of this._characters) {
      character.x = Math.random() * this._backgroundImage.width;
      character.y = Math.random() * this._backgroundImage.height;
    }
  }

  private async loadCharacters(): Promise<void> {
    for (const character of this.characters) {
      await character.loadImage();
    }
  }

  paintCharacters(context: CanvasRenderingContext2D): void {
    try {
      for (const character of this.characters) {
        character.paint(context, this._bgOffsetX, this._bgOffsetY);
      }
    } catch (error) {
      throw error;
    }
  }
}

export default Level;
