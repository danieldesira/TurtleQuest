import React from "react";
import Dialog from "./Dialog";
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
}: Props) => (
  <Dialog title={title} type="form">
    <form
      action="#"
      method="post"
      className="flex flex-col gap-3 p-2"
      onSubmit={handleSubmit}
    >
      {inputs.map(
        ({
          label,
          name,
          value,
          type,
          options,
          required,
          maxLength,
          readonly,
        }) => (
          <SingleInput
            key={name}
            label={label}
            name={name}
            value={value}
            type={type}
            options={options}
            handleChange={handleInputChange}
            required={required}
            maxLength={maxLength}
            readonly={readonly}
          />
        )
      )}
      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-pink-600 rounded-md text-xl text-white p-2"
        >
          Save
        </button>
      </div>
    </form>
  </Dialog>
);

export default FormDialog;
