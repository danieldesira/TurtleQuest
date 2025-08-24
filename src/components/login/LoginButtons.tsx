import { useSelector } from "react-redux";
import RootState from "../../features/RootState";
import MembersArea from "../membersArea/MembersArea";
import { useState } from "react";
import LoginDialog from "./LoginDialog";

const LoginButtons = () => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.authentication.isAuthenticated
  );
  const [showLoginDialog, setShowLoginDialog] = useState<boolean>(
    !isAuthenticated
  );

  const handleLoginClick = () => setShowLoginDialog(true);

  return (
    <div className="flex gap-2 items-center">
      {isAuthenticated ? (
        <MembersArea />
      ) : (
        <button
          type="button"
          role="button"
          className="bg-primary text-white pl-2 pr-2 rounded-sm"
          onClick={handleLoginClick}
        >
          Login
        </button>
      )}
      {showLoginDialog && <LoginDialog setShowLogin={setShowLoginDialog} />}
    </div>
  );
};

export default LoginButtons;
