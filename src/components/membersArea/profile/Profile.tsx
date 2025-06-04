import React, { Dispatch, SetStateAction } from "react";
import FormDialog from "../../dialog/FormDialog";
import { Input } from "../../dialog/types";
import { setProfile } from "../../../features/gameState/gameStateReducer";
import { useDispatch, useSelector } from "react-redux";
import RootState from "../../../features/RootState";
import { updateProfile } from "../../../services/api";
import { updateDialogContent } from "../../../features/dialogs/dialogReducer";

type Props = {
  showDialog: boolean;
  setShowDialog: Dispatch<SetStateAction<boolean>>;
};

const Profile = ({ showDialog, setShowDialog }: Props) => {
  const dispatch = useDispatch();
  const profile = useSelector((state: RootState) => state.game.profile.value);

  const profileConfig: Input[] = [
    {
      label: "Profile Picture",
      name: "profile_picture",
      type: "imageUpload",
      value: profile.profile_pic,
      required: false,
      maxLength: 0,
      readonly: false,
    },
    {
      label: "Name",
      name: "name",
      type: "text",
      required: true,
      maxLength: 120,
      value: profile.name,
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      required: true,
      maxLength: 120,
      value: profile.email,
      readonly: true,
    },
    {
      label: "Date of Birth",
      name: "date_of_birth",
      type: "date",
      required: true,
      value: profile.date_of_birth,
    },
  ];

  const handleChange = (event: React.ChangeEvent) => {
    const { name, value } = event.target as HTMLInputElement;
    dispatch(setProfile({ profile: { ...profile, [name]: value } }));
  };

  const handleSubmit = async () => {
    setShowDialog(false);

    try {
      await updateProfile({
        name: profile.name,
        email: profile.email,
        date_of_birth: profile.date_of_birth,
      });
    } catch {
      dispatch(
        updateDialogContent({
          dialog: {
            title: "Profile error",
            text: ["Failed to save player info! Please try again."],
            type: "error",
          },
        })
      );
    }
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
