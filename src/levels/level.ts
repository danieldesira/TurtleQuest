import ICharacter from "../characters/icharacter";
import ILevel from "./ilevel";

abstract class Level implements ILevel {
  protected abstract backgroundImagePath: string;
  protected abstract backgroundImage: HTMLImageElement;
  protected abstract characters: Set<ICharacter>;

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

  getBgImgPath = () => this.backgroundImagePath;
  getBgImg = () => this.backgroundImage;
  getCharacters = () => this.characters;

  setInitialCharacterPositions(): void {
    for (const character of this.characters) {
      const x = Math.random() * this.backgroundImage.width;
      const y = Math.random() * this.backgroundImage.height;
      character.setPosition(x, y);
      console.log(`(${x}, ${y})`);
    }
  }
}

export default Level;
