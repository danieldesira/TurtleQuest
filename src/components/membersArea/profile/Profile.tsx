import { Dispatch, SetStateAction, useState } from "react";
import FormDialog from "../../dialog/FormDialog";
import { Input } from "../../dialog/types";
import { setProfile } from "../../../features/gameState/gameStateReducer";
import { useDispatch, useSelector } from "react-redux";
import RootState from "../../../features/RootState";
import { updateProfile, uploadProfilePicture } from "../../../services/api";
import { updateDialogContent } from "../../../features/dialogs/dialogReducer";
import LoadingIndicator from "../../LoadingOverlay";

type Props = {
  showDialog: boolean;
  setShowDialog: Dispatch<SetStateAction<boolean>>;
};

const Profile = ({ showDialog, setShowDialog }: Props) => {
  const dispatch = useDispatch();

  const profile = useSelector((state: RootState) => state.game.profile.value);
  const [isUploadingPicture, setIsUploadingPicture] = useState<boolean>(false);

  const profileConfig: Input[] = [
    {
      label: "Profile Picture",
      name: "profile_picture",
      type: "imageUpload",
      value: profile.profile_pic_url,
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

  const handleChange = async (event: React.ChangeEvent) => {
    const { name, value } = event.target as HTMLInputElement;
    if (name === "profile_picture") {
      const file = (event.target as HTMLInputElement).files?.[0];
      if (file) {
        try {
          setIsUploadingPicture(true);
          await uploadProfilePicture(file);
        } catch {
          dispatch(
            updateDialogContent({
              dialog: {
                title: "Error uploading Profile Picture",
                text: ["Failed to upload profile picture. Try again later."],
                type: "error",
              },
            })
          );
        } finally {
          setIsUploadingPicture(false);
        }
      }
    } else {
      dispatch(setProfile({ profile: { ...profile, [name]: value } }));
    }
  };

  const handleSubmit = async () => {
    setShowDialog(false);

    try {
      await updateProfile({
        name: profile.name,
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

  return (
    showDialog && (
      <>
        <FormDialog
          title="Profile"
          inputs={profileConfig}
          handleInputChange={handleChange}
          handleSubmit={handleSubmit}
        />
        {isUploadingPicture && (
          <LoadingIndicator message="Uploading profile picture..." />
        )}
      </>
    )
  );
};

export default Profile;
