import React, { useState } from "react";
import ControlButton from "./ControlButton";
import Dialog from "../dialog/dialog";
import GameMeter from "./meters/GameMeter";
import GameCanvas from "./GameCanvas";
import Turtle from "../characters/turtle";
import { version } from "../../package.json";
import { FaFishFins } from "react-icons/fa6";
import { FaHeartbeat } from "react-icons/fa";
import { FaLungs } from "react-icons/fa";

function App() {
  const [turtle, _] = useState(new Turtle());

  Dialog.notify({
    id: "dialog-game-welcome",
    title: "Welcome",
    text: ["Welcome to Turtle Escape!"],
  });

  return (
    <>
      <div className="fixed top-1 left-1 flex">
        <FaFishFins />
        <GameMeter value={turtle.foodValue} />
        <FaHeartbeat />
        <GameMeter value={turtle.lifeValue} />
        <FaLungs />
        <GameMeter value={turtle.oxygenValue} />
      </div>
      <GameCanvas turtle={turtle} />
      <div className="fixed bottom-1 left-1 text-white dark:text-gray-950 touch-none">
        <div className="mb-1 flex justify-center">
          <ControlButton text="&uarr;" callback={() => turtle.moveUp()} />
        </div>
        <div className="flex gap-1">
          <ControlButton text="&larr;" callback={() => turtle.moveLeft()} />
          <ControlButton text="&darr;" callback={() => turtle.moveDown()} />
          <ControlButton text="&rarr;" callback={() => turtle.moveRight()} />
        </div>
      </div>
      <div className="fixed bottom-1 right-1">
        <a
          href="https://github.com/danieldesira/TurtleEscape/blob/master/changelog.md"
          target="_blank"
        >
          {version}
        </a>
        <a
          href="https://github.com/danieldesira/TurtleEscape/blob/master/contributors.md"
          target="_blank"
        >
          Daniel & co
        </a>
      </div>
    </>
  );
}

export default App;
