import Character from "./character";

class Turtle extends Character {
    constructor() {
        super();
        this.x = 10;
        this.y = 10;
    }

    paint(context) {
        const turtleImage = document.createElement('img');
        turtleImage.src = './images/turtle.png';
        turtleImage.onload = () => context.drawImage(turtleImage,
            this.x,
            this.y,
            turtleImage.width / 4,
            turtleImage.height / 4);
    }
}

export default Turtle;