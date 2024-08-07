import React, { useState } from "react";
import SingleSetting from "./SingleSetting";
import { ControlsPositionValue, Setting, SettingsValue } from "./types";

type Props = {
  exit: Function;
};

function Settings({ exit }: Props) {
  const currentSettings = JSON.parse(
    localStorage.getItem("gameSettings") ?? "[]"
  ) as Setting[];

  const [settings, setSettings] = useState<Setting[]>([
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

    exit();
  };

  const handleBack = () => exit();

  return (
    <>
      <div className="flex flex-col gap-5">
        <h2 className="text-5xl text-center">Settings</h2>
        <hr className="w-96 m-auto" />
      </div>
      <div className="flex flex-col gap-5">
        <form
          action="#"
          method="post"
          className="flex flex-col gap-5"
          onSubmit={handleSubmit}
        >
          {settings.map(({ label, name, value, type, options }) => (
            <div key={name} className="flex gap-5 justify-center">
              <SingleSetting
                label={label}
                name={name}
                value={value}
                type={type}
                options={options}
                handleChange={handleSettingChange}
              />
            </div>
          ))}
          <div className="flex gap-5 justify-center">
            <button
              type="submit"
              className="bg-green-600 rounded-md h-16 w-52 text-3xl text-white"
            >
              Save
            </button>
            <button
              type="button"
              className="bg-red-600 rounded-md h-16 w-52 text-3xl text-white"
              onClick={handleBack}
            >
              Back
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Settings;
