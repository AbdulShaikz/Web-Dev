import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { authService } from "./appwrite/auth";
import { login, logout } from "./store/authSlice";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login(userData));
        } else {
          dispatch(logout());
        }
      })
      .catch((err) => console.log("userData ", err))
      .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <div className="flex flex-wrap h-screen w-full bg-gray-800 text-white">
      <div>
        <h1>Blogify</h1>
      </div>
    </div>
  ) : null;
}

export default App;
