import React from "react";
import { ReactElement } from "react";

interface Props {
  callback: Function;
  icon: ReactElement;
  text: string;
}

function MenuButton({ callback, icon, text }: Props) {
  const handleClick = async (event: React.MouseEvent) => {
    event.preventDefault();
    await callback();
  };
  return (
    <a href="#" onClick={handleClick}>
      <span className="text-white flex gap-2 text-5xl">
        {icon} {text}
      </span>
    </a>
  );
}

export default MenuButton;
