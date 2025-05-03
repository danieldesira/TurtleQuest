import React from "react";
import { Input } from "./types";

type Props = Input & { handleChange: React.ChangeEventHandler };

const SingleInput = ({
  name,
  label,
  type,
  value,
  options,
  handleChange,
}: Props) => (
  <div className="flex gap-5 justify-center items-center">
    <label htmlFor={name} className="text-xl">
      {label}
    </label>
    {type === "radio" ? (
      options.map((o, index) => (
        <div key={o} className="flex gap-3 items-center">
          <input
            className="appearance-none w-4 h-4 border-pink-600 border-2 rounded-sm checked:bg-pink-600"
            key={index}
            type="radio"
            id={`${name}-${o}`}
            name={name}
            value={o}
            defaultChecked={o === value}
            onChange={handleChange}
          />
          <label htmlFor={`${name}-${o}`} className="text-lg">
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
        className="bg-white rounded-sm h-8 w-52 text-slate-950 border-pink-600 border-2"
        onChange={handleChange}
      />
    )}
  </div>
);

export default SingleInput;
