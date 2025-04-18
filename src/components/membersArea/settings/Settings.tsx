import React, { Dispatch, SetStateAction, useState } from "react";
import FormDialog from "../../dialog/FormDialog";
import { Input } from "../../dialog/types";
import { Settings, updateSettings } from "../../../services/api";

type Props = {
  showDialog: boolean;
  setShowDialog: Dispatch<SetStateAction<boolean>>;
  initialSettings: Settings;
};

const Settings = ({ showDialog, setShowDialog, initialSettings }: Props) => {
  const settingsConfig: Input[] = [
    {
      label: "Control Position",
      name: "controlPosition",
      type: "radio",
      options: ["Left", "Right"],
    },
  ];

  const [settings, setSettings] = useState<Settings>(initialSettings);

  const handleSettingChange = (event: React.ChangeEvent) => {
    const { name, value } = event.target as HTMLInputElement;
    setSettings({ ...settings, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    await updateSettings(settings);

    setShowDialog(false);
  };

  return showDialog ? (
    <FormDialog
      title="Settings"
      inputs={settingsConfig}
      handleInputChange={handleSettingChange}
      handleSubmit={handleSubmit}
      handleClose={() => setShowDialog(false)}
    />
  ) : null;
};

export default Settings;
