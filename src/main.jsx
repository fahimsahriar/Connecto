import React from "react";
import "./main.scss";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";
import { createBrowserRouter, Navigate, Outlet, RouterProvider } from "react-router-dom";
import Navbar from './components/navbar/Navbar.jsx'
import Leftbar from './components/leftbar/Leftbar.jsx'
import Rightbar from './components/rightbar/Rightbar.jsx'
import Home from './pages/home/Home.jsx'
import Profile from './pages/profile/Profile.jsx'
import { useEffect } from "react";
let loggedIn = true;

const ProtectedLayout = ({children}) => {
  // const [loggedIn, setLoggedIn] = useEffect(false);
  if(!loggedIn){
    return <Navigate to="/register" />
  }
  else {
    return children;
  }
}

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div style={{display: "flex"}}>
        <Leftbar />
        <div style={{flex:"6"}}>
          <Outlet />
        </div>
        <Rightbar />
      </div>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/home",
    element: <ProtectedLayout><Layout /></ProtectedLayout>,
    children: [
      {
        path: "",
        element: <Home />
      },
      // {
      //   path: "/profile/:id",
      //   element: <Profile />
      // }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
