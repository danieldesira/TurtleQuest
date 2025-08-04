export const Directions = {
  Right: 0,
  Left: Math.PI,
  Up: Math.PI * 1.5,
  Down: Math.PI * 0.5,
} as const;

export type Direction = "Right" | "Left" | "Up" | "Down";
