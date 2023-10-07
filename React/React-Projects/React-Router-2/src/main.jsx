import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import Api, { githubInfoLoader } from './components/API/Api.jsx';
import {Downloads, Files, Github, Keylogs, License, Privacy, Profile, Socials, Terms} from './footer.js';
import './index.css';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import User from './components/User/User.jsx';

/* const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "user/:username",
        element: <User/>,
      },
      {
        path: "",
        element: <Home/>,
      },
      {
        path: "about",
        element: <About/>,
      },
      {
        path: "contact",
        element: <Contact/>,
      },
      {
        loader: githubInfoLoader,
        path: "api",
        element: <Api/>,
      },
      {
        path: "privacy",
        element: <Privacy/>,
      },
      {
        path: "terms",
        element: <Terms/>,
      },
      {
        path: "license",
        element: <License/>,
      },
      {
        path: "downloads",
        element: <Downloads/>,
      },
      {
        path: "profile",
        element: <Profile/>,
      },
      {
        path: "files",
        element: <Files/>,
      },
      {
        path: "github",
        element: <Github/>,
      },
      {
        path: "socials",
        element: <Socials/>,
      },
      {
        path: "keylogs",
        element: <Keylogs/>,
      },
    ]
  },
]) */

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='user/:username' element={<User/>} />
      <Route path='' element={<Home/>} />
      <Route path='about' element={<About/>} />
      <Route path='contact' element={<Contact/>} />
      <Route loader={githubInfoLoader} path='api' element={<Api/>} />
      <Route path='privacy' element={<Privacy/>} />
      <Route path='terms' element={<Terms/>} />
      <Route path='license' element={<License/>} />
      <Route path='downloads' element={<Downloads/>} />
      <Route path='profile' element={<Profile/>} />
      <Route path='files' element={<Files/>} />
      <Route path='github' element={<Github/>} />
      <Route path='socials' element={<Socials/>} />
      <Route path='keylogs' element={<Keylogs/>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
