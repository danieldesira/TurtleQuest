import React, { Dispatch, SetStateAction } from "react";
import FormDialog from "../../dialog/FormDialog";
import { Input } from "../../dialog/types";
import { updateSettings } from "../../../services/api";
import { useDispatch, useSelector } from "react-redux";
import RootState from "../../../features/RootState";
import { setSettings } from "../../../features/gameState/gameStateReducer";
import { updateDialogContent } from "../../../features/dialogs/dialogReducer";

type Props = {
  showDialog: boolean;
  setShowDialog: Dispatch<SetStateAction<boolean>>;
};

const Settings = ({ showDialog, setShowDialog }: Props) => {
  const dispatch = useDispatch();
  const settings = useSelector(
    (state: RootState) => state.game.profile.value.settings
  );

  const settingsConfig: Input[] = [
    {
      label: "Control Position",
      name: "controlPosition",
      type: "radio",
      options: ["Left", "Right"],
      value: settings.controlPosition,
    },
  ];

  const handleSettingChange = (event: React.ChangeEvent) => {
    const { name, value } = event.target as HTMLInputElement;
    dispatch(setSettings({ settings: { ...settings, [name]: value } }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    setShowDialog(false);

    try {
      await updateSettings(settings);
    } catch {
      dispatch(
        updateDialogContent({
          dialog: {
            title: "Settings error",
            text: ["Failed to save settings! Please try again."],
            type: "error",
          },
        })
      );
    }
  };

  return showDialog ? (
    <FormDialog
      title="Settings"
      inputs={settingsConfig}
      handleInputChange={handleSettingChange}
      handleSubmit={handleSubmit}
    />
  ) : null;
};

export default Settings;
