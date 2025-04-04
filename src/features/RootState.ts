import AuthenticationState from "./authentication/AuthenticationState";
import DialogState from "./dialogs/DialogState";
import GameState from "./gameState/GameState";
import LevelState from "./levels/LevelState";
import TurtleState from "./turtleMonitor/TurtleState";

interface RootState {
  levels: LevelState;
  dialogs: DialogState;
  turtleMonitor: TurtleState;
  game: GameState;
  authentication: AuthenticationState;
}

export default RootState;
