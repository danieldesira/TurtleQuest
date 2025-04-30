import { Settings } from "../../services/types";

interface GameState {
  state: { value: "in-progress" | "saving" | "menu" };
  isLoadingLevel: { value: boolean };
  settings: { value: Settings };
}

export default GameState;
