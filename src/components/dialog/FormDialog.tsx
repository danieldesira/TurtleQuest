import Dialog from "./Dialog";
import React from "react";
import { Input } from "./types";
import SingleInput from "./SingleInput";

type Props = {
  title: string;
  inputs: Input[];
  handleSubmit: React.FormEventHandler;
  handleInputChange: React.ChangeEventHandler;
};

const FormDialog = ({
  title,
  inputs,
  handleSubmit,
  handleInputChange,
}: Props) => {
  return (
    <Dialog
      title={title}
      content={
        <form
          action="#"
          method="post"
          className="flex flex-col gap-5"
          onSubmit={handleSubmit}
        >
          {inputs.map(({ label, name, value, type, options }) => (
            <div key={name} className="flex gap-5 justify-center">
              <SingleInput
                label={label}
                name={name}
                value={value}
                type={type}
                options={options}
                handleChange={handleInputChange}
              />
            </div>
          ))}
          <div className="flex gap-5 justify-center">
            <button
              type="submit"
              className="bg-green-600 rounded-md h-16 w-52 text-xl text-white"
            >
              Save
            </button>
            <button
              type="button"
              className="bg-red-600 rounded-md h-16 w-52 text-xl text-white"
            >
              Back
            </button>
          </div>
        </form>
      }
      type="form"
    />
  );
};

export default FormDialog;
