import {
  GoogleCredentialResponse,
  GoogleLogin,
  GoogleOAuthProvider,
} from "@react-oauth/google";
import React from "react";

function LoginButtons() {
  const handleGoogleSuccess = ({ credential }: GoogleCredentialResponse) => {};

  const handleGoogleError = () =>
    alert("An error occured while signin with Google");

  return (
    <div className="flex flex-col gap-2">
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
        <GoogleLogin
          onSuccess={handleGoogleSuccess}
          onError={handleGoogleError}
          useOneTap
        />
      </GoogleOAuthProvider>
    </div>
  );
}

export default LoginButtons;
