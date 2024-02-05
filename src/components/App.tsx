import React from "react";
import Dialog from "../dialog/dialog";
import GameCanvas from "./GameCanvas";
import Footer from "./Footer";
import ControlGroup from "./controls/ControlGroup";
import Header from "./Header";

function App() {
  Dialog.notify({
    id: "dialog-game-welcome",
    title: "Welcome",
    text: ["Welcome to Turtle Escape!"],
  });

  return (
    <>
      <Header />
      <GameCanvas />
      <ControlGroup />
      <Footer />
    </>
  );
}

export default App;
