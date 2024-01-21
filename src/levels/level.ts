import Character from "../characters/icharacter";

abstract class Level {
  protected abstract backgroundImage: string;
  protected abstract characters: Character[];

  getBgImg = () => this.backgroundImage;
  getCharacters = () => this.characters;

}

export default Level;
