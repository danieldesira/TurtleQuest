import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  state: { value: "menu" },
  isLoadingLevel: { value: false },
};

const slice = createSlice({
  name: "game",
  initialState,
  reducers: {
    stopGame: (state) => {
      state.state.value = "menu";
    },
    startGame: (state) => {
      state.state.value = "in-progress";
    },
    startLoadingLevel: (state) => {
      state.isLoadingLevel.value = true;
    },
    stopLoadingLevel: (state) => {
      state.isLoadingLevel.value = false;
    },
    startSaving: (state) => {
      state.state.value = "saving";
    },
    completeSaving: (state) => {
      state.state.value = "menu";
    },
  },
});

export const {
  stopGame,
  startGame,
  startLoadingLevel,
  stopLoadingLevel,
  startSaving,
  completeSaving,
} = slice.actions;

export default slice.reducer;
