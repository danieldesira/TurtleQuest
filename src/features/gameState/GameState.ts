import { Settings } from "../../services/api";

interface GameState {
  state: { value: "in-progress" | "saving" | "menu" };
  isLoadingLevel: { value: boolean };
  settings: { value: Settings };
}

export default GameState;
