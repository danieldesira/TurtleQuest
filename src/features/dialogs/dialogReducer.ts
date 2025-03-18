import { createSlice } from "@reduxjs/toolkit";

const initialState = { dialog: { title: "", text: [""], type: "default" } };

const slice = createSlice({
  name: "dialogs",
  initialState,
  reducers: {
    updateDialogContent: (state, action) => {
      state.dialog.title = action.payload.dialog.title;
      state.dialog.text = action.payload.dialog.text;
      state.dialog.type = action.payload.dialog.type ?? "default";
    },
  },
});

export const { updateDialogContent } = slice.actions;

export default slice.reducer;
