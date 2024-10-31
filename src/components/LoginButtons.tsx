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
      <GoogleOAuthProvider clientId="133557707337-19ctrvhko436b3aqf8f3mk3ms9l33nla.apps.googleusercontent.com">
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
