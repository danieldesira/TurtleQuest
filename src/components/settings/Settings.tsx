import React, { useState } from "react";
import SingleSetting from "./SingleSetting";
import { Setting } from "./types";

type Props = {
  exit: Function;
};
function Settings({ exit }: Props) {
  const [settings, setSettings] = useState<Setting[]>([
    {
      label: "Control Position",
      name: "controlPosition",
      value: "Right",
      type: "select",
      options: ["Left", "Right"],
    },
  ]);

  const handleSettingChange = (event: React.ChangeEvent) => {
    const { name, value } = event.target as HTMLInputElement;
    setSettings((prev) => {
      const setting = prev.find((s) => s.name === name);
      setting.value = value;
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
    <div className="flex flex-col text-slate-950 gap-5">
      <h2 className="text-3xl">Settings</h2>
      <form
        action="#"
        method="post"
        className="flex flex-col gap-2"
        onSubmit={handleSubmit}
      >
        {settings.map(({ label, name, value, type, options }) => (
          <div key={name} className="flex gap-2">
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
        <div className="flex gap-2">
          <button type="submit" className="bg-cyan-950 rounded-sm w-1/2">
            Save
          </button>
          <button
            type="button"
            className="bg-red-600 rounded-sm w-1/2"
            onClick={handleBack}
          >
            Back
          </button>
        </div>
      </form>
    </div>
  );
}

export default Settings;
