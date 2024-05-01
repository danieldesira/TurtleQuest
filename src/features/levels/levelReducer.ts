import { createSlice } from "@reduxjs/toolkit";

const initialState = { level: { value: 1 } };

const levelSlice = createSlice({
  name: "levels",
  initialState,
  reducers: {
    levelUp: (state) => {
      state.level.value++;
    },
    resetLevel: (state) => {
      state.level.value = 1;
    },
    restoreLevel: (state, action) => {
      state.level.value = action.payload.levelValue;
    },
  },
});

export const { levelUp, resetLevel, restoreLevel } = levelSlice.actions;

export default levelSlice.reducer;
