import React from "react";

interface Props {
  callback: () => void;
  text: string;
}

const MenuButton = ({ callback, text }: Props) => (
  <span className="text-slate-950 text-5xl" role="button" onClick={callback}>
    {text}
  </span>
);

export default MenuButton;
