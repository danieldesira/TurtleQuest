import PackPrey from "../characters/abstract/PackPrey";
import INonMainCharacter from "../characters/interfaces/INonMainCharacter";
import { restoreCharacters } from "../restoreGame/parseGameData";
import ILevel from "./ILevel";
import LevelCharacter from "./LevelCharacter";

abstract class Level implements ILevel {
  protected readonly _backgroundImagePath: string =
    "./static/images/backgrounds/";
  protected abstract readonly _backgroundImageFilename: string;
  protected abstract readonly _initialCharacters: LevelCharacter[];
  protected _backgroundImage: HTMLImageElement | null;
  protected _characters: Set<INonMainCharacter> = new Set();
  protected _bgOffsetX: number;
  protected _bgOffsetY: number;
  protected abstract readonly _benthicOffsetY: number;
  protected abstract readonly _currentSpeed: number;
  protected abstract readonly _points: number;

  /**
   * Initialises level.
   * @param isFreshLevel Determines whether the level is fresh or restored.
   * @author Daniel Desira
   */
  async init(isFreshLevel: boolean): Promise<void> {
    await this.loadBgImg();
    if (isFreshLevel) {
      await this.spawnCharacters();
    } else {
      await this.restoreCharacters();
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

  get points() {
    return this._points;
  }

  private async spawnCharacters(): Promise<void> {
    this._characters.clear();
    let lastPackCharacter: PackPrey = null;

    const promises: Promise<void>[] = [];

    for (const characterInfo of this._initialCharacters) {
      for (let i = 0; i < characterInfo.amount; i++) {
        const character = new characterInfo.constructor();
        promises.push(character.loadImage());
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

    await Promise.all(promises);
  }

  private async restoreCharacters() {
    restoreCharacters();
    await Promise.all([...this._characters].map((c) => c.loadImage()));
  }

  /**
   * Loops through characters and paints them accordingly.
   * @param context The canvas 2D context
   * @author Daniel Desira
   */
  paintCharacters(context: CanvasRenderingContext2D): void {
    try {
      for (const character of this._characters) {
        character.paint(context, this._bgOffsetX, this._bgOffsetY);
      }
    } catch (error) {
      throw error;
    }
  }

  /**
   * Loops through characters and applies respective moves.
   * @author Daniel Desira
   */
  moveCharacters(): void {
    for (const character of this._characters) {
      character.swim();
    }
  }

  get currentSpeed(): number {
    return this._currentSpeed;
  }

  /**
   * Loops through characters and checks for collisions.
   * @author Daniel Desira
   */
  checkIfTurtleMeetsCharacters(): void {
    for (const character of this._characters) {
      if (character.isCollidingWithTurtle()) {
        character.handleTurtleCollision();
      }
    }
  }
}

export default Level;
