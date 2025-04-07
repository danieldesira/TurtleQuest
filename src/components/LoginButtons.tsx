import React, { useEffect } from "react";
import { updateDialogContent } from "../features/dialogs/dialogReducer";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../services/api";
import {
  authenticate,
  logout,
} from "../features/authentication/authenticationReducer";
import RootState from "../features/RootState";

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
      if (loginResult) {
        localStorage.setItem("token", credential);
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

  const handleProfile = () => {};

  return (
    <div className="flex gap-2">
      {isAuthenticated ? (
        <>
          <button
            role="button"
            onClick={handleProfile}
            className="bg-green-700 text-white rounded p-2"
          >
            Profile
          </button>
          <button
            role="button"
            onClick={handleLogout}
            className="bg-red-500 text-white rounded p-2"
          >
            Logout
          </button>
        </>
      ) : (
        <div id="googleSignInButton"></div>
      )}
    </div>
  );
}

export default LoginButtons;
