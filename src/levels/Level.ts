import ICharacter from "../characters/interfaces/ICharacter";
import ILevel from "./ILevel";

abstract class Level implements ILevel {
  protected readonly _backgroundImagePath: string = "./images/backgrounds/";
  protected abstract readonly _backgroundImageFilename: string;
  protected abstract readonly _initialCharacters: Set<ICharacter>;
  protected _backgroundImage: HTMLImageElement;
  protected _characters: Set<ICharacter> = new Set();
  protected _bgOffsetX: number;
  protected _bgOffsetY: number;
  protected abstract readonly _benthicOffsetY: number;

  async init(): Promise<HTMLImageElement> {
    try {
      await this.loadBgImg();
      this.deepCopyCharacters();
      await this.loadCharacters();
      this.setInitialCharacterPositions();
      return this._backgroundImage;
    } catch (error) {
      throw error;
    }
  }

  private loadBgImg(): Promise<void> {
    return new Promise((resolve, reject) => {
      const backgroundImage = document.createElement("img");
      backgroundImage.src =
        this._backgroundImagePath + this._backgroundImageFilename;
      backgroundImage.onload = () => {
        this._backgroundImage = backgroundImage;
        resolve();
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

  get bgOffsetX(): number {
    return this._bgOffsetX;
  }

  get bgOffsetY(): number {
    return this._bgOffsetY;
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

  get benthicOffsetY() {
    return this._benthicOffsetY;
  }

  private setInitialCharacterPositions(): void {
    for (const character of this._characters) {
      character.setInitialPosition();
    }
  }

  private deepCopyCharacters(): void {
    for (const character of this._initialCharacters) {
      this._characters.add(character);
    }
  }

  private async loadCharacters(): Promise<void> {
    for (const character of this._characters) {
      await character.loadImage();
    }
  }

  paintCharacters(context: CanvasRenderingContext2D): void {
    try {
      for (const character of this._characters) {
        character.paint(context, this._bgOffsetX, this._bgOffsetY);
      }
    } catch (error) {
      throw error;
    }
  }

  moveCharacters(): void {
    for (const character of this._characters) {
      character.swim();
    }
  }
}

export default Level;
