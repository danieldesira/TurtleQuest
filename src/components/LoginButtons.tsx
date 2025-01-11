import React, { useState, useEffect } from "react";

declare global {
  interface Window {
    google: {
      accounts: { id: { initialize: Function; renderButton: Function } };
    };
  }
}

function LoginButtons() {
  const [isLoggedin, setIsLoggedin] = useState<boolean>(
    !!localStorage.getItem("token")
  );

  useEffect(() => {
    // Initialize Google Sign-In
    window.google.accounts.id.initialize({
      client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
      callback: handleGoogleResponse,
    });

    // Render the Google Sign-In button
    window.google.accounts.id.renderButton(
      document.getElementById("googleSignInButton"),
      { theme: "outline", size: "large" }
    );
  }, [isLoggedin]);

  const handleGoogleResponse = (response: any) => {
    console.log(response.credential);
    localStorage.setItem("token", response.credential);
    setIsLoggedin(true);
  };

  return (
    <div className="flex flex-col gap-2">
      {isLoggedin ? (
        <button
          onClick={() => {
            localStorage.removeItem("token");
            setIsLoggedin(false);
          }}
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
