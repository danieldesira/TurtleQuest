import { useEffect, useState } from "react";
import { updateDialogContent } from "../features/dialogs/dialogReducer";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../services/api";
import { authenticate } from "../features/authentication/authenticationReducer";
import RootState from "../features/RootState";
import {
  setPersonalBest,
  setProfile,
} from "../features/gameState/gameStateReducer";
import MembersArea from "./membersArea/MembersArea";
import LoadingIndicator from "./LoadingIndicator";
import { LoginResponse } from "../services/types";
import { useLogout } from "./membersArea/hooks";
import {
  getLastGameLocalStorage,
  getLastGameTimestampLocalStorage,
  saveLastGameLocalStorage,
  saveLastGameTimestampLocalStorage,
} from "../utils/lastGameLocalStorage";

const LoginButtons = () => {
  const dispatch = useDispatch();
  const logout = useLogout();

  const isAuthenticated = useSelector(
    (state: RootState) => state.authentication.isAuthenticated
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    window.google?.accounts?.id?.initialize({
      client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
      callback: handleGoogleResponse,
    });

    window.google?.accounts?.id?.renderButton(
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

  const storeAccountGameDataLocally = (accountData: LoginResponse) => {
    saveLastGameLocalStorage(JSON.stringify(accountData.lastGame));
    saveLastGameTimestampLocalStorage(accountData.player.last_game_saved_on);
  };

  const checkGameData = (accountData: LoginResponse) => {
    if (accountData.lastGame) {
      const locallySavedGame = getLastGameLocalStorage();
      const localTimestamp = getLastGameTimestampLocalStorage();
      if (locallySavedGame && localTimestamp) {
        if (Number(localTimestamp) <= accountData.player.last_game_saved_on) {
          storeAccountGameDataLocally(accountData);
        }
      } else {
        storeAccountGameDataLocally(accountData);
      }
    }
  };

  const checkPersonalBest = (accountData: LoginResponse) => {
    const { personalBest } = accountData;
    if (personalBest) {
      dispatch(setPersonalBest({ personalBest }));
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
        dispatch(setProfile({ profile: loginResult.player }));
        dispatch(authenticate());
      } else {
        showAuthError();
      }

      checkGameData(loginResult);
      checkPersonalBest(loginResult);
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
