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
  required,
  maxLength,
  readonly,
}: Props) => (
  <div className="flex gap-5 justify-center items-center">
    <label htmlFor={name} className="text-xl">
      {label}
    </label>
    {type === "radio" ? (
      options.map((o, index) => (
        <div key={o} className="flex gap-3 items-center">
          <input
            className="appearance-none w-4 h-4 border-pink-600 border-2 rounded-sm checked:bg-pink-600 focus:ring-2 focus:ring-pink-400/50"
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
        className="rounded-sm h-8 w-52 text-pink-600 border-pink-600 border-2 bg-transparent accent-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-400/50"
        required={required}
        aria-required={required}
        aria-autocomplete="none"
        maxLength={maxLength}
        onChange={handleChange}
        readOnly={readonly}
        aria-readonly={readonly}
      />
    )}
  </div>
);

export default SingleInput;
