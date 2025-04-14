import React from "react";
import { useDispatch } from "react-redux";
import { saveGame } from "../services/api";
import { IoIosArrowBack } from "react-icons/io";
import { updateDialogContent } from "../features/dialogs/dialogReducer";
import {
  triggerMenuMode,
  triggerSavingMode,
} from "../features/gameState/gameStateReducer";

function BackButton() {
  const dispatch = useDispatch();

  const handleClick = async (event: React.MouseEvent) => {
    event.preventDefault();

    dispatch(triggerSavingMode());
    try {
      await saveGame();
    } catch {
      dispatch(
        updateDialogContent({
          title: "Saving Error",
          text: ["Game did not save successfully"],
          type: "error",
        })
      );
    } finally {
      dispatch(triggerMenuMode());
    }
  };

  return (
    <button
      role="button"
      type="button"
      onClick={handleClick}
      className="bg-black opacity-60 hover:opacity-90 rounded-xl p-2"
    >
      <IoIosArrowBack />
    </button>
  );
}

export default BackButton;
