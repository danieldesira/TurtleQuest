import React from "react";
import GameCanvas from "./GameCanvas";
import Footer from "./Footer";
import ControlGroup from "./controls/ControlGroup";
import Header from "./Header";
import Dialog from "./Dialog";

function App() {
  return (
    <>
      <Header />
      <GameCanvas />
      <ControlGroup />
      <Dialog title="Welcome" text={["Welcome to Turtle Escape!"]} />
      <Footer />
    </>
  );
}

export default App;
