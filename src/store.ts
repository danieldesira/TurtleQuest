import { configureStore } from "@reduxjs/toolkit";
import levelReducer from "./features/levels/levelReducer";

const store = configureStore({
  reducer: {
    levels: levelReducer,
  },
});

export default store;
