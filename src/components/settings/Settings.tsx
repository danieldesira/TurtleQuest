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
    <>
      <div className="flex flex-col gap-5">
        <h2 className="text-5xl text-center">Settings</h2>
        <hr className="w-96" />
      </div>
      <div className="flex flex-col text-slate-950 gap-5">
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
            <button type="submit" className="bg-cyan-950 rounded-sm h-16 w-52">
              Save
            </button>
            <button
              type="button"
              className="bg-red-600 rounded-sm h-16 w-52"
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
