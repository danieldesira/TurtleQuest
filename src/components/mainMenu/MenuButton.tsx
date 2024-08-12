import React from "react";
import { ReactElement } from "react";

interface Props {
  callback: Function;
  icon: ReactElement;
  text: string;
}

function MenuButton({ callback, icon, text }: Props) {
  const handleClick = async () => await callback();

  return (
    <span
      className="text-slate-950 flex gap-2 text-5xl"
      role="button"
      onClick={handleClick}
    >
      {icon} {text}
    </span>
  );
}

export default MenuButton;
