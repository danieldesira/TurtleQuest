import React, { useState } from "react";
import SingleSetting from "./SingleSetting";

type Option = {
  label: string;
  name: string;
  value: string;
  type: "text" | "radio" | "number";
  options?: string[];
};

function Settings() {
  const [options, setOptions] = useState<Option[]>([
    {
      label: "Control Position",
      name: "controlPosition",
      value: "right",
      type: "radio",
      options: ["left", "right"],
    },
  ]);

  return (
    <div className="text-white">
      <h2>Settings</h2>
      <div className="">
        <form action="#" method="post">
          {options.map(({ label, name, value, type, options }) => (
            <div key={name}>
              <SingleSetting
                label={label}
                name={name}
                value={value}
                type={type}
                options={options}
              />
            </div>
          ))}
        </form>
      </div>
    </div>
  );
}

export default Settings;
