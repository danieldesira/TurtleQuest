import Background from "../Background";

const resizeCanvas = (canvas: HTMLCanvasElement) => {
  if (canvas) {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    Background.readjustCanvasForBg(canvas);
  }
};

export default resizeCanvas;
