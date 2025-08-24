import { useState } from "react";
import { IoLogOut } from "react-icons/io5";
import { RiSettings5Fill } from "react-icons/ri";
import Settings from "./settings/Settings";
import Profile from "./profile/Profile";
import { useLogout, useRefreshProfilePicture } from "./hooks";
import { useSelector } from "react-redux";
import RootState from "../../features/RootState";

const MembersArea = () => {
  const [showSettings, setShowSettings] = useState<boolean>(false);
  const [showProfile, setShowProfile] = useState<boolean>(false);
  const profile = useSelector((state: RootState) => state.game.profile.value);

  const logout = useLogout();
  useRefreshProfilePicture();

  const handleSettings = () => setShowSettings(true);

  const handleProfile = () => setShowProfile(true);

  return (
    <>
      <RiSettings5Fill
        role="button"
        onClick={handleSettings}
        className="text-primary text-4xl"
      />
      <img
        role="button"
        src={profile.profile_pic_url}
        onClick={handleProfile}
        className="w-8 h-8 rounded-sm"
      />
      <IoLogOut
        role="button"
        onClick={logout}
        className="text-danger text-4xl"
      />
      <Settings showDialog={showSettings} setShowDialog={setShowSettings} />
      <Profile showDialog={showProfile} setShowDialog={setShowProfile} />
    </>
  );
};

export default MembersArea;
