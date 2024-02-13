import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  turtle: {
    life: { value: 100 },
    food: { value: 100 },
    oxygen: { value: 100 },
  },
};

const slice = createSlice({
  name: "turtleMonitor",
  initialState,
  reducers: {
    breath: (state) => {
      if (state.turtle.oxygen.value < 100) {
        state.turtle.oxygen.value += 0.5;
      }
    },
    respire: (state) => {
      state.turtle.oxygen.value -= 0.001;
    },
    useFood: (state) => {
      state.turtle.food.value -= 0.005;
    },
    eat: (state, action) => {
      if (state.turtle.food.value < 100) {
        state.turtle.food.value += action.payload.turtle.foodValue;
      }
    },
    takeDamage: (state, action) => {
      state.turtle.life.value -= action.payload.turtle.lifeValue;
    },
    resetTurtle: (state) => {
      state.turtle = initialState.turtle;
    },
  },
});

export const {
  breath,
  respire,
  useFood,
  eat,
  takeDamage,
  resetTurtle,
} = slice.actions;

export default slice.reducer;
