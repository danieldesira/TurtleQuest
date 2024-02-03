import React from "react";
import Dialog from "../dialog/dialog";
import GameMeter from "./meters/GameMeter";
import GameCanvas from "./GameCanvas";
import Turtle from "../characters/turtle";
import { FaFishFins } from "react-icons/fa6";
import { FaHeartbeat } from "react-icons/fa";
import { FaLungs } from "react-icons/fa";
import Footer from "./Footer";
import ControlGroup from "./controls/ControlGroup";

function App() {
  const turtle = new Turtle();

  Dialog.notify({
    id: "dialog-game-welcome",
    title: "Welcome",
    text: ["Welcome to Turtle Escape!"],
  });

  return (
    <>
      <div className="fixed top-1 left-1 flex">
        <FaFishFins />
        <GameMeter turtle={turtle} _key={"foodValue"} />
        <FaHeartbeat />
        <GameMeter turtle={turtle} _key={"lifeValue"} />
        <FaLungs />
        <GameMeter turtle={turtle} _key={"oxygenValue"} />
      </div>
      <GameCanvas turtle={turtle} />
      <ControlGroup turtle={turtle} />
      <Footer />
    </>
  );
}

export default App;
