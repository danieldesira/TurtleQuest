import Level1 from "./level1";

abstract class Level {
  protected abstract backgroundImage: string;

  getBgImg = () => this.backgroundImage;
}

export default Level;
