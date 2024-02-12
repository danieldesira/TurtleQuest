import { createSlice } from "@reduxjs/toolkit";

const initialState = { level: { value: 1 } };

const levelSlice = createSlice({
  name: "levels",
  initialState,
  reducers: {
    levelUp: (state) => {
      state.level.value++;
    },
  },
});

export const { levelUp } = levelSlice.actions;

export default levelSlice.reducer;
