import { useDispatch } from "react-redux";
import appwriteAuthService from "../../appwrite/appwriteAuth.js";
import authSliceLogout from "../../store/authSlice.js";

function LogoutButton() {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    appwriteAuthService.logout().then(() => {
      dispatch(authSliceLogout());
    });
  };

  return (
    <button
      className="inline-bock px-6 py-2 duration-300 hover:bg-red-800 rounded-3xl hover:text-white"
      onClick={logoutHandler}
    >
      Logout
    </button>
  );
}
export default LogoutButton;
