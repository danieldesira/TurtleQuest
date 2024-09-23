import {
  CredentialResponse,
  GoogleLogin,
  GoogleOAuthProvider,
} from "@react-oauth/google";
import React, { useState } from "react";

function LoginButtons() {
  const isAuthenticated = !!localStorage.getItem("authentication");

  const [showLogin, setShowLogin] = useState<boolean>(!isAuthenticated);

  const handleSuccess = ({ credential }: CredentialResponse) => {
    localStorage.setItem("authentication", credential);
    setShowLogin((_) => false);
  };

  const handleLogout = () => {
    localStorage.removeItem("authentication");
    setShowLogin((_) => true);
  };

  return (
    <div className="flex flex-col gap-2 justify-center items-center">
      <GoogleOAuthProvider clientId="133557707337-n53m2nodegdumjcsjccodb6fppaf6mcv.apps.googleusercontent.com">
        {showLogin ? (
          <GoogleLogin onSuccess={handleSuccess} useOneTap />
        ) : (
          <button
            type="button"
            className="bg-gray-800 text-white rounded-md p-2"
            onClick={handleLogout}
          >
            Logout
          </button>
        )}
      </GoogleOAuthProvider>
    </div>
  );
}

export default LoginButtons;
