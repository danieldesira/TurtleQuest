import React from "react";
import { Setting } from "./types";

type Props = Setting & { handleChange: React.ChangeEventHandler };

function SingleSetting({
  name,
  label,
  type,
  value,
  options,
  handleChange,
}: Props) {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      {type === "select" ? (
        <select
          id={name}
          name={name}
          className="bg-cyan-950 rounded-sm"
          onChange={handleChange}
        >
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
          onChange={handleChange}
        />
      )}
    </>
  );
}

export default SingleSetting;
