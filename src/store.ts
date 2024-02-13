import { configureStore } from "@reduxjs/toolkit";
import levelReducer from "./features/levels/levelReducer";
import dialogReducer from "./features/dialogs/dialogReducer";
import turtleReducers from "./features/turtleMonitor/turtleReducers";

const store = configureStore({
  reducer: {
    levels: levelReducer,
    dialogs: dialogReducer,
    turtleMonitor: turtleReducers,
  },
});

export default store;
