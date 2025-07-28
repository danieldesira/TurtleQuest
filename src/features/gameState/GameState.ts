import { Player } from "../../services/types";

interface GameState {
  state: { value: "in-progress" | "saving" | "menu" };
  isLoadingLevel: { value: boolean };
  profile: { value: Player };
}

export default GameState;
