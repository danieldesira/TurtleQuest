import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  turtle: {
    life: { value: 100 },
    food: { value: 100 },
    oxygen: { value: 100 },
    stomachCapacity: { value: 100 },
    xp: { value: 0 },
  },
};

const slice = createSlice({
  name: "turtleMonitor",
  initialState,
  reducers: {
    breath: (state) => {
      const increment = 0.5;
      if (
        state.turtle.oxygen.value + increment <
        initialState.turtle.oxygen.value
      ) {
        state.turtle.oxygen.value += increment;
      } else {
        state.turtle.oxygen.value = initialState.turtle.oxygen.value;
      }
    },
    respire: (state) => {
      state.turtle.oxygen.value -= 0.001;
    },
    useFood: (state) => {
      state.turtle.food.value -= 0.005;
    },
    eat: (state, action) => {
      const increment = action.payload.turtle.foodValue;
      if (
        state.turtle.food.value + increment <
        initialState.turtle.food.value
      ) {
        state.turtle.food.value += increment;
      } else {
        state.turtle.food.value = initialState.turtle.food.value;
      }
    },
    takeDamage: (state, action) => {
      state.turtle.life.value -= action.payload.turtle.lifeValue;
    },
    resetTurtle: (state) => {
      state.turtle = initialState.turtle;
    },
    decrementStomachCapacity: (state, action) => {
      const decrement = action.payload.turtle.stomachValue;
      if (state.turtle.stomachCapacity.value - decrement > 0) {
        state.turtle.stomachCapacity.value -= decrement;
      } else {
        state.turtle.stomachCapacity.value = 0;
      }
    },
    recoverStomachCapacity: (state) => {
      const increment = 0.00000000000000000000005;
      if (
        state.turtle.stomachCapacity.value + increment <
        initialState.turtle.stomachCapacity.value
      ) {
        state.turtle.stomachCapacity.value += increment;
      } else {
        state.turtle.stomachCapacity.value =
          initialState.turtle.stomachCapacity.value;
      }
    },
    gainPoints: (state, action) => {
      const increment = action.payload.turtle.xpValue;
      state.turtle.xp.value += increment;
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
  decrementStomachCapacity,
  recoverStomachCapacity,
  gainPoints,
} = slice.actions;

export default slice.reducer;
