import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import React from "react";

function LoginButtons() {
  const handleSuccess = () => alert("hello");

  return (
    <div className="flex flex-col gap-2">
      <GoogleOAuthProvider clientId="133557707337-19ctrvhko436b3aqf8f3mk3ms9l33nla.apps.googleusercontent.com">
        <GoogleLogin onSuccess={handleSuccess} useOneTap />
      </GoogleOAuthProvider>
    </div>
  );
}

export default LoginButtons;
