import Background from "../Background";

const resizeCanvas = (canvas: HTMLCanvasElement) => {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
  Background.readjustCanvasForBg(canvas);
};

const useResizeCanvas = () => resizeCanvas;

export default useResizeCanvas;
