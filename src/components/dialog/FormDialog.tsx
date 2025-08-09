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
  <Dialog title={title} type="form" handleSubmit={handleSubmit}>
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
  </Dialog>
);

export default FormDialog;
