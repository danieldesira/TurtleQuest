import angles from "../constants/angles";
import Character from "./character";

class Turtle implements Character {
  private x: number;
  private y: number;
  private angle: number;

  private bgStartX: number;
  private bgStartY: number;
  private limitY: number;
  private static step: number = 3;

  constructor() {
    this.resetPosition();
    this.angle = angles.right;
    this.setBgStart(0, 0);
  }

  getX = () => this.x;
  getY = () => this.y;

  resetPosition() {
    this.x = 50;
    this.y = 10;
  }

  setBgStart(x: number, y: number) {
    this.bgStartX = x;
    this.bgStartY = y;
  }

  setYLimit(y: number) {
    this.limitY = y;
  }

  moveUp() {
    this.rotate(angles.up);
    if (this.y > 0) {
      this.y -= Turtle.step;
    }
  }

  moveDown() {
    this.rotate(angles.down);
    if (this.y < this.limitY) {
      this.y += Turtle.step;
    }
  }

  moveLeft() {
    this.rotate(angles.left);
    if (this.x > 0) {
      this.x -= Turtle.step;
    }
  }

  moveRight() {
    this.rotate(angles.right);
    this.x += Turtle.step;
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
        this.x - this.bgStartX,
        this.y - this.bgStartY,
        turtleImage.width / 4,
        turtleImage.height / 4
      );
      context.resetTransform();
    };
  }
}

export default Turtle;
