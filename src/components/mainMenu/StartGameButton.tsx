import React from "react";
import { GiSeaTurtle } from "react-icons/gi";
import { startGame } from "../../features/gameState/gameStateReducer";
import MenuButton from "./MenuButton";

interface Props {
  callback: Function;
  text: string;
}

function StartGameButton({ callback, text }: Props) {
  const loadGame = async () => {
    startGame();
    await callback();
  };
  return <MenuButton callback={loadGame} icon={<GiSeaTurtle />} text={text} />;
}

export default StartGameButton;
