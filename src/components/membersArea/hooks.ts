import { useDispatch } from "react-redux";
import { logout } from "../../features/authentication/authenticationReducer";
import { requestLogout } from "../../services/api";
import { resetPersonalBest } from "../../features/gameState/gameStateReducer";

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
