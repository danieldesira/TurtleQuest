import React, { useState, useEffect } from "react";
import { updateDialogContent } from "../features/dialogs/dialogReducer";
import { useDispatch } from "react-redux";
import { login } from "../services/api";

declare global {
  interface Window {
    google: {
      accounts: { id: { initialize: Function; renderButton: Function } };
    };
  }
}

function LoginButtons() {
  const dispatch = useDispatch();

  const [isLoggedin, setIsLoggedin] = useState<boolean>(false);

  useEffect(() => {
    window.google.accounts.id.initialize({
      client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
      callback: handleGoogleResponse,
    });

    window.google.accounts.id.renderButton(
      document.getElementById("googleSignInButton"),
      { theme: "outline", size: "large" }
    );
  }, [isLoggedin]);

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
        setIsLoggedin(true);
      } else {
        showAuthError();
      }
    } catch {
      showAuthError();
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedin(false);
  };

  return (
    <div className="flex flex-col gap-2">
      {isLoggedin ? (
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white rounded p-2"
        >
          Logout
        </button>
      ) : (
        <div id="googleSignInButton"></div>
      )}
    </div>
  );
}

export default LoginButtons;
