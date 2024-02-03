import React from "react";
import Turtle from "../../characters/turtle";
import ControlButton from "./ControlButton";
import {
  GoArrowDown,
  GoArrowLeft,
  GoArrowRight,
  GoArrowUp,
} from "react-icons/go";

interface Props {
  turtle: Turtle;
}

function ControlGroup({ turtle }: Props) {
  return (
    <div className="fixed bottom-1 left-1 text-white dark:text-gray-950 touch-none">
      <div className="mb-1 flex justify-center">
        <ControlButton icon={<GoArrowUp />} callback={() => turtle.moveUp()} />
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
  );
}

export default ControlGroup;
