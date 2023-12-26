import Character from "./character";

class Turtle implements Character {
  private x: number;
  private y: number;

  constructor() {
    this.x = 10;
    this.y = 10;
  }

  moveUp() {
    if (this.y >= 0) {
      --this.y;
    }
  }

  moveDown() {
    ++this.y;
  }

  moveLeft() {
    if (this.x >= 0) {
      --this.x;
    }
  }

  moveRight() {
    ++this.x;
  }

  setPosition(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  paint(context: CanvasRenderingContext2D) {
    const turtleImage = document.createElement("img");
    turtleImage.src = "./images/turtle.png";
    turtleImage.onload = () =>
      context.drawImage(
        turtleImage,
        this.x,
        this.y,
        turtleImage.width / 4,
        turtleImage.height / 4
      );
  }
}

export default Turtle;
