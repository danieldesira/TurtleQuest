import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  state: { value: "menu" },
  isLoadingLevel: { value: false },
  profile: {
    value: { name: "", email: "", settings: { controlPosition: "Right" } },
  },
  personalBest: { value: { points: 0, level: 0 } },
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
      state.profile.value.settings = action.payload.settings;
    },
    setProfile: (state, action) => {
      state.profile.value = action.payload.profile;
    },
    setPersonalBest: (state, action) => {
      if (
        state.personalBest.value.level <= action.payload.personalBest.level &&
        state.personalBest.value.points < action.payload.personalBest.points
      ) {
        state.personalBest.value = action.payload.personalBest;
      }
    },
    resetPersonalBest: (state) => {
      state.personalBest.value.level = 0;
      state.personalBest.value.points = 0;
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
  setProfile,
  setPersonalBest,
  resetPersonalBest,
} = slice.actions;

export default slice.reducer;
