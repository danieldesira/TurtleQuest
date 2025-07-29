import React, { useEffect, useState } from "react";
import { updateDialogContent } from "../features/dialogs/dialogReducer";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../services/api";
import { authenticate } from "../features/authentication/authenticationReducer";
import RootState from "../features/RootState";
import { setProfile } from "../features/gameState/gameStateReducer";
import MembersArea from "./membersArea/MembersArea";
import LoadingIndicator from "./LoadingIndicator";
import GameData from "../restoreGame/GameData";
import { LoginResponse, Player } from "../services/types";
import { useLogout } from "./membersArea/hooks";

const LoginButtons = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(
    (state: RootState) => state.authentication.isAuthenticated
  );
  const logout = useLogout();

  const [isLoading, setIsLoading] = useState<boolean>(false);

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

  useEffect(() => {
    if (isAuthenticated) {
      handleGoogleResponse({ credential: localStorage.getItem("token") });
    }
  }, []);

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

  const storeAccountGameDataLocally = (accountData: LoginResponse) =>
    localStorage.setItem("lastGame", JSON.stringify(accountData.lastGame));

  const checkGameData = (accountData: LoginResponse) => {
    if (accountData.lastGame) {
      const locallySavedGame = localStorage.getItem("lastGame");
      if (locallySavedGame) {
        const parsedLocalSavedGame = JSON.parse(locallySavedGame) as GameData;
        if (parsedLocalSavedGame.timestamp <= accountData.lastGame.timestamp) {
          storeAccountGameDataLocally(accountData);
        }
      } else {
        storeAccountGameDataLocally(accountData);
      }
    }
  };

  const handleGoogleResponse = async ({
    credential,
  }: {
    credential: string;
  }) => {
    try {
      setIsLoading(true);

      const loginResult = await login(credential);

      if (loginResult.player) {
        localStorage.setItem("token", credential);
        dispatch(setProfile({ profile: loginResult.player }));
        dispatch(authenticate());
      } else {
        showAuthError();
      }

      checkGameData(loginResult);
    } catch {
      showAuthError();
      logout();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex gap-2 items-center">
      {isLoading && <LoadingIndicator message="Loading account data" />}
      {isAuthenticated ? <MembersArea /> : <div id="googleSignInButton"></div>}
    </div>
  );
};

export default LoginButtons;
