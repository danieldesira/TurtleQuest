import angles from "../constants/angles";
import Character from "./character";

class Turtle implements Character {
  private x: number;
  private y: number;
  private angle: number;

  constructor() {
    this.x = 10;
    this.y = 10;
    this.angle = angles.right;
  }

  getX = () => this.x;
  getY = () => this.y;

  moveUp() {
    this.rotate(angles.up);
    if (this.y >= 0) {
      --this.y;
    }
  }

  moveDown() {
    this.rotate(angles.down);
    ++this.y;
  }

  moveLeft() {
    this.rotate(angles.left);
    if (this.x >= 0) {
      --this.x;
    }
  }

  moveRight() {
    this.rotate(angles.right);
    ++this.x;
  }

  private rotate(angle: number) {
    this.angle = angle;
  }

  private applyRotation(context: CanvasRenderingContext2D) {
    context.translate(this.x, this.y);
    context.rotate(this.angle);
    context.translate(-this.x, -this.y);
  }

  paint(context: CanvasRenderingContext2D) {
    const turtleImage = document.createElement("img");
    turtleImage.src = "./images/turtle.png";
    turtleImage.onload = () => {
      this.applyRotation(context);
      context.drawImage(
        turtleImage,
        this.x,
        this.y,
        turtleImage.width / 4,
        turtleImage.height / 4
      );
      context.resetTransform();
    };
  }
}

export default Turtle;
