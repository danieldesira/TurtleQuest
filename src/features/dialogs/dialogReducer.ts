import { createSlice } from "@reduxjs/toolkit";

const initialState = { dialog: { title: "", text: [""] } };

const slice = createSlice({
  name: "dialogs",
  initialState,
  reducers: {
    updateDialogContent: (state, action) => {
      state.dialog.title = action.payload.dialog.title;
      state.dialog.text = action.payload.dialog.text;
    },
  },
});

export const { updateDialogContent } = slice.actions;

export default slice.reducer;
