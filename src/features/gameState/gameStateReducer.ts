import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  inProgress: { value: false },
  isLevelLoading: { value: false },
  hasWon: { value: false },
};

const slice = createSlice({
  name: "game",
  initialState,
  reducers: {
    stopGame: (state, actions) => {
      state.inProgress.value = false;
      state.hasWon.value = actions.payload.hasWon;
    },
    startGame: (state) => {
      state.inProgress.value = true;
    },
    startLoadingLevel: (state) => {
      state.isLevelLoading.value = true;
    },
    stopLoadingLevel: (state) => {
      state.isLevelLoading.value = false;
    },
  },
});

export const {
  stopGame,
  startGame,
  startLoadingLevel,
  stopLoadingLevel,
} = slice.actions;

export default slice.reducer;
