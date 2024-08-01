import React, { useState } from "react";
import SingleSetting from "./SingleSetting";

type Option = {
  label: string;
  name: string;
  value: string;
  type: "text" | "select" | "number";
  options?: string[];
};

function Settings() {
  const [options, setOptions] = useState<Option[]>([
    {
      label: "Control Position",
      name: "controlPosition",
      value: "Right",
      type: "select",
      options: ["Left", "Right"],
    },
  ]);

  return (
    <div className="flex flex-col text-white gap-3">
      <h2 className="text-xl">Settings</h2>
      <form action="#" method="post" className="flex flex-col gap-2">
        {options.map(({ label, name, value, type, options }) => (
          <div key={name} className="flex gap-2">
            <SingleSetting
              label={label}
              name={name}
              value={value}
              type={type}
              options={options}
            />
          </div>
        ))}
        <button type="submit" className="bg-cyan-950 rounded-sm">
          Save
        </button>
      </form>
    </div>
  );
}

export default Settings;
