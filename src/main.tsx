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
      title: "Welcome to Turtle Quest!",
      text: [
        "Help Peppa the loggerhead turtle to her nesting grounds. Use the provided on-screen arrows to move the turtle.",
        "Move Peppa to the right end of the screen in order to pass each level. Eat prey and avoid obstacles.",
        "Good luck!",
        "Yours turtley,",
        "Daniel the game developer",
      ],
    },
  })
);
