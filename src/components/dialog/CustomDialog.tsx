import { useDispatch, useSelector } from "react-redux";
import RootState from "../../features/RootState";
import Dialog from "./Dialog";
import React from "react";
import { updateDialogContent } from "../../features/dialogs/dialogReducer";

function CustomDialog() {
  const { title, text } = useSelector(
    (state: RootState) => state.dialogs.dialog
  );

  const dispatch = useDispatch();

  const handleOk = () =>
    dispatch(updateDialogContent({ dialog: { title: "", text: [] } }));

  return (
    <Dialog
      title={title}
      content={
        <>
          {text.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </>
      }
      handleOk={handleOk}
    />
  );
}

export default CustomDialog;
