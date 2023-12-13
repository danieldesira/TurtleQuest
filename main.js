const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const turtleImage = document.createElement('img');
turtleImage.src = './images/turtle.png';
turtleImage.onload = () => context.drawImage(turtleImage, 0, 0);