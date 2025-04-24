import React, { useEffect, useState } from "react";
import { updateDialogContent } from "../features/dialogs/dialogReducer";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../services/api";
import {
  authenticate,
  logout,
} from "../features/authentication/authenticationReducer";
import RootState from "../features/RootState";
import { IoLogOut } from "react-icons/io5";
import { RiProfileFill, RiSettings5Fill } from "react-icons/ri";
import Settings from "./membersArea/settings/Settings";
import { setSettings } from "../features/gameState/gameStateReducer";

declare global {
  interface Window {
    google: {
      accounts: { id: { initialize: Function; renderButton: Function } };
    };
  }
}

function LoginButtons() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(
    (state: RootState) => state.authentication.isAuthenticated
  );

  const [showSettings, setShowSettings] = useState<boolean>(false);

  useEffect(() => {
    window.google.accounts.id.initialize({
      client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
      callback: handleGoogleResponse,
    });

    window.google.accounts.id.renderButton(
      document.getElementById("googleSignInButton"),
      { theme: "outline", size: "large" }
    );
  }, [isAuthenticated]);

  const showAuthError = () =>
    dispatch(
      updateDialogContent({
        dialog: {
          title: "Authentication Error",
          text: [
            "Failed to login! Please contact us at turtle.quest.web@gmail.com",
          ],
          type: "error",
        },
      })
    );

  const handleGoogleResponse = async ({
    credential,
  }: {
    credential: string;
  }) => {
    try {
      const loginResult = await login(credential);
      if (loginResult.player) {
        localStorage.setItem("token", credential);
        dispatch(setSettings({ settings: loginResult.player.settings }));
        dispatch(authenticate());
      } else {
        showAuthError();
      }
    } catch {
      showAuthError();
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(logout());
  };

  const handleSettings = () => setShowSettings(true);

  const handleProfile = () => {};

  return (
    <div className="flex gap-2">
      {isAuthenticated ? (
        <>
          <RiSettings5Fill
            role="button"
            onClick={handleSettings}
            className="text-green-700 w-14 h-14"
          />
          <RiProfileFill
            role="button"
            onClick={handleProfile}
            className="text-green-700 w-14 h-14"
          />
          <IoLogOut
            role="button"
            onClick={handleLogout}
            className="text-red-500 w-14 h-14"
          />
          <Settings showDialog={showSettings} setShowDialog={setShowSettings} />
        </>
      ) : (
        <div id="googleSignInButton"></div>
      )}
    </div>
  );
}

export default LoginButtons;
