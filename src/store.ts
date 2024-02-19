import { configureStore } from "@reduxjs/toolkit";
import levelReducer from "./features/levels/levelReducer";
import dialogReducer from "./features/dialogs/dialogReducer";
import turtleReducers from "./features/turtleMonitor/turtleReducers";
import gameStateReducer from "./features/gameState/gameStateReducer";

const store = configureStore({
  reducer: {
    levels: levelReducer,
    dialogs: dialogReducer,
    turtleMonitor: turtleReducers,
    game: gameStateReducer,
  },
});

export default store;
