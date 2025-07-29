import { useDispatch } from "react-redux";
import { logout } from "../../features/authentication/authenticationReducer";

export const useLogout = () => {
  const dispatch = useDispatch();

  return () => {
    localStorage.removeItem("token");
    dispatch(logout());
  };
};
