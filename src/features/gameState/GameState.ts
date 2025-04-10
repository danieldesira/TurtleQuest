interface GameState {
  state: { value: "in-progress" | "saving" | "menu" };
  isLoadingLevel: { value: boolean };
}

export default GameState;
