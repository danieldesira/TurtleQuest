import React, { useState } from "react";
import { FaUser } from "react-icons/fa6";
import { IoLogOut } from "react-icons/io5";
import { RiSettings5Fill } from "react-icons/ri";
import Settings from "./settings/Settings";
import Profile from "./profile/Profile";
import { useDispatch } from "react-redux";
import { logout } from "../../features/authentication/authenticationReducer";

const MembersArea = () => {
  const [showSettings, setShowSettings] = useState<boolean>(false);
  const [showProfile, setShowProfile] = useState<boolean>(false);

  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(logout());
  };

  const handleSettings = () => setShowSettings(true);

  const handleProfile = () => setShowProfile(true);

  return (
    <>
      <RiSettings5Fill
        role="button"
        onClick={handleSettings}
        className="text-green-700 text-4xl"
      />
      <FaUser
        role="button"
        onClick={handleProfile}
        className="text-green-700 text-4xl"
      />
      <IoLogOut
        role="button"
        onClick={handleLogout}
        className="text-red-500 text-4xl"
      />
      <Settings showDialog={showSettings} setShowDialog={setShowSettings} />
      <Profile showDialog={showProfile} setShowDialog={setShowProfile} />
    </>
  );
};

export default MembersArea;
