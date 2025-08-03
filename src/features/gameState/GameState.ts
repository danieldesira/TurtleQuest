import { Player } from "../../services/types";

interface GameState {
  state: { value: "in-progress" | "menu" };
  isLoadingLevel: { value: boolean };
  profile: { value: Player };
  personalBest: { value: { points: number; level: number } };
}

export default GameState;
