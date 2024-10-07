import React, { useEffect, useState } from "react";
import Session from "supertokens-auth-react/recipe/session";

type LoginButtonsProps = {
  set
}

function LoginButtons() {
  const isAuthenticated = !!localStorage.getItem("authentication");

  const [showLogin, setShowLogin] = useState<boolean>(!isAuthenticated);

  const checkIfLoggedIn = async () => {
    const isLoggedIn = await Session.doesSessionExist();
    setShowLogin(!isLoggedIn);
  };

  const handleLogin = () => {
    setShowLogin(false);
  };

  const handleLogout = () => {
    setShowLogin(true);
  };

  useEffect(() => {
    checkIfLoggedIn();
  }, []);

  return (
    <div className="flex flex-col gap-2 justify-center items-center">
      {showLogin ? (
        <button
          type="button"
          role="button"
          className="bg-gray-800 text-white rounded-md p-2"
          onClick={handleLogin}
        >
          Login
        </button>
      ) : (
        <button
          type="button"
          role="button"
          className="bg-gray-800 text-white rounded-md p-2"
          onClick={handleLogout}
        >
          Logout
        </button>
      )}
    </div>
  );
}

export default LoginButtons;
