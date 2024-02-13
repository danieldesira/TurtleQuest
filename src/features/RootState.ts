import DialogState from "./dialogs/DialogState";
import LevelState from "./levels/LevelState";
import TurtleState from "./turtleMonitor/TurtleState";

interface RootState {
  levels: LevelState;
  dialogs: DialogState;
  turtleMonitor: TurtleState;
}

export default RootState;
