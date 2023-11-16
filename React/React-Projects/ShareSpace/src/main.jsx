import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import {Login, AuthLayout, EditPost} from "./components/index.js"
import MyPosts from "./pages/MyPosts.jsx";
import AddPost from "./pages/AddPost.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";
import CheckEmail from "./components/CheckEmail.jsx";
import VerifyEmail from "./components/VerifyEmail.jsx";
import SignUp from "./components/SignUp.jsx";
import Post from "./pages/Post.jsx";

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
        element: (
          <AuthLayout authentication={false}>
            <Login/>
          </AuthLayout>
          ),
      },
      {
        path: "/signup",
        element: (
          <AuthLayout authentication={false}>
            <SignUp/>
          </AuthLayout>
          ),
      },
      {
        path: "/check-email",
        element: <CheckEmail />,
      },
      {
        path: "/verify-email",
        element: <VerifyEmail />,
      },
      {
        path: "/my-posts",
        element: (
          <AuthLayout authentication>
            <MyPosts/>
          </AuthLayout>
          ),
      },
      {
        path: "/add-post",
        element: (
          <AuthLayout authentication>
            <AddPost/>
          </AuthLayout>
          ),
      },
      {
        path: "/post/:slug",
        element: (
          <AuthLayout authentication>
            <Post/>
          </AuthLayout>
          ),
      },
      {
        path: "/edit-post/:slug",
        element: (
          <AuthLayout authentication>
            <EditPost/>
          </AuthLayout>
          ),
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
