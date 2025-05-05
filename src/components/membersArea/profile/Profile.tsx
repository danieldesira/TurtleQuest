import React, { Dispatch, SetStateAction } from "react";
import FormDialog from "../../dialog/FormDialog";
import { Input } from "../../dialog/types";

type Props = {
  showDialog: boolean;
  setShowDialog: Dispatch<SetStateAction<boolean>>;
};

const Profile = ({ showDialog, setShowDialog }: Props) => {
  const profileConfig: Input[] = [
    {
      label: "Name",
      name: "name",
      type: "text",
      required: true,
      maxLength: 120,
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      required: true,
      maxLength: 120,
    },
    {
      label: "Date of Birth",
      name: "date_of_birth",
      type: "date",
      required: true,
    },
  ];

  const handleChange = () => {};

  const handleSubmit = () => {
    setShowDialog(false);
  };

  return showDialog ? (
    <FormDialog
      title="Profile"
      inputs={profileConfig}
      handleInputChange={handleChange}
      handleSubmit={handleSubmit}
    />
  ) : null;
};

export default Profile;
