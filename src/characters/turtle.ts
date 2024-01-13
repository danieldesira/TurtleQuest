import angles from "../constants/angles";
import Character from "./character";

class Turtle implements Character {
  private x: number;
  private y: number;
  private angle: number;

  private bgStartX: number;
  private bgStartY: number;
  private limitX: number;
  private limitY: number;

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

  setLimits(x: number, y: number) {
    this.limitX = x;
    this.limitY = y;
  }

  moveUp() {
    this.rotate(angles.up);
    if (this.y > 0) {
      --this.y;
    }
  }

  moveDown() {
    this.rotate(angles.down);
    if (this.y < this.limitY) {
      ++this.y;
    }
  }

  moveLeft() {
    this.rotate(angles.left);
    if (this.x > 0) {
      --this.x;
    }
  }

  moveRight() {
    this.rotate(angles.right);
    if (this.x < this.limitX) {
      ++this.x;
    }
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
