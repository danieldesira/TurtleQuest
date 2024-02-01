import React, { useEffect } from "react";
import ControlButton from "./ControlButton";
import Dialog from "../dialog/dialog";
import GameMeter from "./meters/GameMeter";
import GameCanvas from "./GameCanvas";
import Turtle from "../characters/turtle";
import { version } from "../../package.json";

function App() {
  const turtle = new Turtle();

  Dialog.notify({
    id: "dialog-game-welcome",
    title: "Welcome",
    text: ["Welcome to Turtle Escape!"],
  });

  return <>
    <div className="fixed top-1 left-1 flex">
      <GameMeter value={turtle.foodValue} />
      <GameMeter value={turtle.lifeValue} />
      
      <GameMeter value={turtle.oxygenValue} />
    </div>
    <GameCanvas turtle={turtle} />
    <div className="fixed bottom-1 left-1 text-white dark:text-gray-950 touch-none">
      <div className="mb-1">
        <ControlButton text="&uarr;" callback={()=>{}} />
      </div>
      <div>
        <ControlButton text="&larr;" callback={()=>{}} />
        <ControlButton text="&darr;" callback={()=>{}} />
        <ControlButton text="&rarr;" callback={()=>{}} />
      </div>
    </div>
    <div className="fixed bottom-1 right-1">
      <a href="https://github.com/danieldesira/TurtleEscape/blob/master/changelog.md" target="_blank">{version}</a>
      <a href="https://github.com/danieldesira/TurtleEscape/blob/master/contributors.md" target="_blank">Daniel & co</a>
    </div>
  </>;
}

export default App;
