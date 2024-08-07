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
      <label htmlFor={name} className="text-5xl text-slate-950">
        {label}
      </label>
      {type === "radio" ? (
        options.map((o, index) => (
          <div className="flex gap-3">
            <input
              key={index}
              type="radio"
              id={`${name}-${o}`}
              name={name}
              value={o}
              defaultChecked={o === value}
              onChange={handleChange}
            />
            <label htmlFor={`${name}-${o}`} className="text-3xl text-slate-950">
              {o}
            </label>
          </div>
        ))
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          className="bg-white rounded-sm h-16 w-52 p-10 text-slate-950"
          onChange={handleChange}
        />
      )}
    </>
  );
}

export default SingleSetting;
