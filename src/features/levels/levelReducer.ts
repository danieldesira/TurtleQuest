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
  },
});

export const { levelUp, resetLevel } = levelSlice.actions;

export default levelSlice.reducer;
