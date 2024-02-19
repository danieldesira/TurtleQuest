import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  inProgress: { value: true },
};

const slice = createSlice({
  name: "game",
  initialState,
  reducers: {
    stopGame: (state) => {
      state.inProgress.value = false;
    },
    startGame: (state) => {
      state.inProgress.value = true;
    },
  },
});

export const { stopGame, startGame } = slice.actions;

export default slice.reducer;
