import React from "react";

interface Props {
  text: string;
  callback: React.MouseEventHandler<HTMLButtonElement>;
}

function ControlButton({text, callback}: Props) {
  return (
    <button
      type="button"
      className="rounded-7xl w-20 h-20 bg-theme-color dark:bg-dark-theme-color opacity-50 hover:opacity-70 block m-auto"
      onClick={callback}
    >
      {text}
    </button>
  );
}

export default ControlButton;
