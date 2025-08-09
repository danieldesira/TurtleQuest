import { useDispatch } from "react-redux";
import { logout } from "../../features/authentication/authenticationReducer";
import { revokeJwt } from "../../services/api";

export const useLogout = () => {
  const dispatch = useDispatch();

  return async () => {
    try {
      await revokeJwt();
    } finally {
      localStorage.removeItem("token");
      dispatch(logout());
    }
  };
};
