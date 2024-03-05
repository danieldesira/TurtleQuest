import NeptuneGrass from "../characters/NeptuneGrass";
import PlasticBag from "../characters/PlasticBag";
import Sardine from "../characters/Sardine";
import Shrimp from "../characters/Shrimp";
import NonMain from "../characters/abstract/NonMain";
import PackPrey from "../characters/abstract/PackPrey";
import ILevel from "./ILevel";
import LevelCharacter, { CharacterType } from "./LevelCharacter";

abstract class Level implements ILevel {
  protected readonly _backgroundImagePath: string = "./images/backgrounds/";
  protected abstract readonly _backgroundImageFilename: string;
  protected abstract readonly _initialCharacters: LevelCharacter[];
  protected _backgroundImage: HTMLImageElement;
  protected _characters: Set<NonMain> = new Set();
  protected _bgOffsetX: number;
  protected _bgOffsetY: number;
  protected abstract readonly _benthicOffsetY: number;

  async init(): Promise<void> {
    try {
      await this.loadBgImg();
      await this.createCharacters();
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

  private async createCharacters(): Promise<void> {
    this._characters.clear();
    let lastPackCharacter: PackPrey = null;
    for (const characterInfo of this._initialCharacters) {
      for (let i = 0; i < characterInfo.amount; i++) {
        const character = this.instantiateCharacter(characterInfo.type);
        await character.loadImage();
        if (character instanceof PackPrey) {
          if (lastPackCharacter) {
            character.previousCharacterX = lastPackCharacter.x;
            character.previousCharacterY = lastPackCharacter.y;
          }
          lastPackCharacter = character;
        }
        character.setInitialPosition();
        this._characters.add(character);
      }
    }
  }

  private instantiateCharacter(type: CharacterType): NonMain {
    let character: NonMain;
    switch (type) {
      case "shrimp":
        character = new Shrimp();
        break;
      case "sardine":
        character = new Sardine();
        break;
      case "neptuneGrass":
        character = new NeptuneGrass();
        break;
      case "plasticBag":
        character = new PlasticBag();
        break;
    }
    return character;
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
