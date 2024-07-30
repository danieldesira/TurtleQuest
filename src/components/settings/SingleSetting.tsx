import React from "react";

type Props = {
  name: string;
  label: string;
  type: "text" | "number" | "radio";
  value: string
  options?: string[];
};

function SingleSetting({ name, label, type, value, options }: Props) {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input type={type} id={name} name={name} value={value}>
        {options ? null : null}
      </input>
    </>
  );
}

export default SingleSetting;
