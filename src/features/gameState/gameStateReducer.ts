import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  inProgress: { value: false },
  isLevelLoading: { value: false },
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
