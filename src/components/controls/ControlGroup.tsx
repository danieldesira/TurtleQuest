import React from "react";
import ControlButton from "./ControlButton";
import {
  GoArrowDown,
  GoArrowLeft,
  GoArrowRight,
  GoArrowUp,
} from "react-icons/go";
import Game from "../../Game";
import { useSelector } from "react-redux";
import RootState from "../../features/RootState";
import { Setting } from "../settings/types";

function ControlGroup() {
  const turtle = Game.instance.turtle;
  const gameRunning = useSelector(
    (state: RootState) => state.game.state.value === "in-progress"
  );
  const settings = JSON.parse(
    localStorage.getItem("gameSettings") || "[]"
  ) as Setting[];
  const controlPosition = settings.find((s) => s.name === "controlPosition");
  return (
    <>
      {gameRunning ? (
        <div
          className={`fixed bottom-1 ${
            !controlPosition || controlPosition.value === "Right"
              ? "right-1"
              : "left-1"
          }`}
        >
          <div className="mb-1 flex justify-center">
            <ControlButton
              icon={<GoArrowUp />}
              callback={() => turtle.moveUp()}
            />
          </div>
          <div className="flex gap-1">
            <ControlButton
              icon={<GoArrowLeft />}
              callback={() => turtle.moveLeft()}
            />
            <ControlButton
              icon={<GoArrowDown />}
              callback={() => turtle.moveDown()}
            />
            <ControlButton
              icon={<GoArrowRight />}
              callback={() => turtle.moveRight()}
            />
          </div>
        </div>
      ) : null}
    </>
  );
}

export default ControlGroup;
