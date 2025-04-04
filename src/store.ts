import { configureStore } from "@reduxjs/toolkit";
import levelReducer from "./features/levels/levelReducer";
import dialogReducer from "./features/dialogs/dialogReducer";
import turtleReducers from "./features/turtleMonitor/turtleReducers";
import gameStateReducer from "./features/gameState/gameStateReducer";
import authenticationReducer from "./features/authentication/authenticationReducer";

const store = configureStore({
  reducer: {
    levels: levelReducer,
    dialogs: dialogReducer,
    turtleMonitor: turtleReducers,
    game: gameStateReducer,
    authentication: authenticationReducer,
  },
});

export default store;
