import React from "react";

type Props = {
  name: string;
  label: string;
  type: "text" | "number" | "select";
  value: string;
  options?: string[];
};

function SingleSetting({ name, label, type, value, options }: Props) {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      {type === "select" ? (
        <select id={name} name={name} className="bg-cyan-950 rounded-sm">
          {options.map((o, index) => (
            <option key={index} selected={value === o} value={o}>
              {o}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          className="bg-cyan-950 rounded-sm"
        />
      )}
    </>
  );
}

export default SingleSetting;
