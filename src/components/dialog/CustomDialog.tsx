import { useDispatch, useSelector } from "react-redux";
import RootState from "../../features/RootState";
import Dialog from "./Dialog";
import { updateDialogContent } from "../../features/dialogs/dialogReducer";

const CustomDialog = () => {
  const { title, text, type, buttons } = useSelector(
    (state: RootState) => state.dialogs.dialog
  );

  const dispatch = useDispatch();

  const handleOk = () =>
    dispatch(
      updateDialogContent({ dialog: { title: "", text: [], type: "default" } })
    );

  return (
    <Dialog title={title} type={type} handleOk={handleOk} buttons={buttons}>
      {text.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </Dialog>
  );
};

export default CustomDialog;
