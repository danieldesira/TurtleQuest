import Background from "../Background";

/**
 * Resizes canvas while taking the background size in 
 * consideration.
 * @param canvas The canvas element
 * @author Daniel Desira
 */
const resizeCanvas = (canvas: HTMLCanvasElement) => {
  if (canvas) {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    Background.readjustCanvasForBg(canvas);
  }
};

export default resizeCanvas;
