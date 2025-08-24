import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/authentication/authenticationReducer";
import { fetchProfilePicUrl, requestLogout } from "../../services/api";
import {
  resetPersonalBest,
  setProfile,
} from "../../features/gameState/gameStateReducer";
import { useEffect } from "react";
import RootState from "../../features/RootState";

export const useLogout = () => {
  const dispatch = useDispatch();

  return async () => {
    try {
      await requestLogout();
    } finally {
      dispatch(logout());
      dispatch(resetPersonalBest());
    }
  };
};

export const useRefreshProfilePicture = () => {
  const dispatch = useDispatch();

  const profile = useSelector((state: RootState) => state.game.profile.value);

  const refreshProfilePicUrl = async () => {
    const { profilePicUrl } = await fetchProfilePicUrl();
    dispatch(
      setProfile({ profile: { ...profile, profile_pic_url: profilePicUrl } })
    );
  };

  useEffect(() => {
    refreshProfilePicUrl();
  }, []);
};
