import Dialog from "./Dialog";
import React from "react";
import { Input } from "./types";
import SingleInput from "./SingleInput";

type Props = {
  title: string;
  inputs: Input[];
  handleSubmit: React.FormEventHandler;
  handleInputChange: React.ChangeEventHandler;
  handleClose: () => void;
};

const FormDialog = ({
  title,
  inputs,
  handleSubmit,
  handleInputChange,
  handleClose,
}: Props) => (
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
          <SingleInput
            key={name}
            label={label}
            name={name}
            value={value}
            type={type}
            options={options}
            handleChange={handleInputChange}
          />
        ))}
        <div className="flex gap-5 justify-center">
          <button
            type="submit"
            className="bg-green-600 rounded-md text-xl text-white p-2 flex-1"
          >
            Save
          </button>
          <button
            type="button"
            className="bg-red-600 rounded-md text-xl text-white p-2 flex-1"
            onClick={handleClose}
          >
            Close
          </button>
        </div>
      </form>
    }
    type="form"
  />
);

export default FormDialog;
