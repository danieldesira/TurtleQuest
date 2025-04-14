import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  state: { value: "menu" },
  isLoadingLevel: { value: false },
};

const slice = createSlice({
  name: "game",
  initialState,
  reducers: {
    triggerMenuMode: (state) => {
      state.state.value = "menu";
    },
    triggerGameMode: (state) => {
      state.state.value = "in-progress";
    },
    startLoadingLevel: (state) => {
      state.isLoadingLevel.value = true;
    },
    stopLoadingLevel: (state) => {
      state.isLoadingLevel.value = false;
    },
    triggerSavingMode: (state) => {
      state.state.value = "saving";
    },
  },
});

export const {
  triggerGameMode,
  triggerMenuMode,
  startLoadingLevel,
  stopLoadingLevel,
  triggerSavingMode,
} = slice.actions;

export default slice.reducer;
