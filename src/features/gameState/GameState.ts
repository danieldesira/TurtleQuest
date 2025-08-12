import { Player } from "../../services/interfaces";

interface GameState {
  state: { value: "in-progress" | "menu" | "saving" };
  isLoadingLevel: { value: boolean };
  profile: { value: Player };
  personalBest: { value: { points: number; level: number } };
}

export default GameState;
