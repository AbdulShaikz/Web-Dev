import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/LoginPage.jsx";
import Signup from "./pages/SignUpPage.jsx";
import MyPosts from "./pages/MyPosts.jsx";
import AddPost from "./pages/AddPost.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";
import CheckEmail from "./components/CheckEmail.jsx";
import VerifyEmail from "./components/VerifyEmail.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/my-posts",
        element: <MyPosts />,
      },
      {
        path: "/add-post",
        element: <AddPost />,
      },
      {
        path: "/check-email",
        element: <CheckEmail />,
      },
      {
        path: "/verify-email",
        element: <VerifyEmail />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
