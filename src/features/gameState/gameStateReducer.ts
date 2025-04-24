import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  state: { value: "menu" },
  isLoadingLevel: { value: false },
  settings: { value: { controlPosition: "Right" } },
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
    setSettings: (state, action) => {
      state.settings.value = action.payload.settings;
    },
  },
});

export const {
  triggerGameMode,
  triggerMenuMode,
  startLoadingLevel,
  stopLoadingLevel,
  triggerSavingMode,
  setSettings,
} = slice.actions;

export default slice.reducer;
