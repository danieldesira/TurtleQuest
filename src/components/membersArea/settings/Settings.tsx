import React, { Dispatch, SetStateAction, useState } from "react";
import { ControlsPositionValue, SettingsValue } from "./types";
import FormDialog from "../../dialog/FormDialog";
import { Input } from "../../dialog/types";

type Props = {
  showDialog: boolean;
  setShowDialog: Dispatch<SetStateAction<boolean>>;
};

const Settings = ({ showDialog, setShowDialog }: Props) => {
  const currentSettings = JSON.parse(
    localStorage.getItem("gameSettings") ?? "[]"
  ) as Input[];

  const [settings, setSettings] = useState<Input[]>([
    {
      label: "Control Position",
      name: "controlPosition",
      value:
        currentSettings && currentSettings.length
          ? (currentSettings.find((s) => s.name === "controlPosition")
              .value as ControlsPositionValue)
          : "Right",
      type: "radio",
      options: ["Left", "Right"],
    },
  ]);

  const handleSettingChange = (event: React.ChangeEvent) => {
    const { name, value } = event.target as HTMLInputElement;
    setSettings((prev) => {
      const setting = prev.find((s) => s.name === name);
      setting.value = value as SettingsValue;
      return prev;
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    localStorage.setItem("gameSettings", JSON.stringify(settings));

    setShowDialog(false);
  };

  //const handleBack = () => exit();

  return showDialog ? (
    <FormDialog
      title="Settings"
      inputs={settings}
      handleInputChange={handleSettingChange}
      handleSubmit={handleSubmit}
    />
  ) : null;
};

export default Settings;
