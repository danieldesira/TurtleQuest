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
  const fieldCssClasses = "bg-cyan-950 rounded-sm h-16 w-52";

  return (
    <>
      <label htmlFor={name} className="text-5xl">
        {label}
      </label>
      {type === "select" ? (
        <select
          id={name}
          name={name}
          className={fieldCssClasses}
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
          className={fieldCssClasses}
          onChange={handleChange}
        />
      )}
    </>
  );
}

export default SingleSetting;
