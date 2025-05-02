import Dialog from "./Dialog";
import React, { useState } from "react";
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
      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-green-600 rounded-md text-xl text-white p-2 flex-1 w-fit"
        >
          Save
        </button>
      </div>
    </form>
  </Dialog>
);

export default FormDialog;
