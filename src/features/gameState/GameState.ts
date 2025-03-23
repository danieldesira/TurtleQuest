interface GameState {
  inProgress: { value: boolean };
  isLevelLoading: { value: boolean };
  hasWon?: { value: boolean };
}

export default GameState;
