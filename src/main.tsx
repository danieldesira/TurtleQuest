import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import store from "./store";
import { updateDialogContent } from "./features/dialogs/dialogReducer";

const appRootElement = document.getElementById("app") as HTMLElement;
const root = createRoot(appRootElement);
root.render(<App />);

store.dispatch(
  updateDialogContent({
    dialog: {
      title: "Welcome",
      text: ["Welcome to Turtle Escape!"],
    },
  })
);
