import React, { useContext } from "react";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar.jsx";
import Leftbar from "./components/leftbar/Leftbar.jsx";
import Rightbar from "./components/rightbar/Rightbar.jsx";
import Home from "./pages/home/Home.jsx";
import Profile from "./pages/profile/Profile.jsx";
import { useEffect } from "react";
import { DarkModeContext } from "./Context/DarkModeContext.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

let loggedIn = true;

const ProtectedRoute = ({ children }) => {
  if (!loggedIn) {
    return <Navigate to='/register' />;
  } else {
    return children;
  }
};

const Layout = () => {
  const { darkMode } = useContext(DarkModeContext);
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar />
        <div style={{ display: "flex" }}>
          <Leftbar />
          <div style={{ flex: "6" }}>
            <Outlet />
          </div>
          <Rightbar />
        </div>
      </div>
    </QueryClientProvider>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/profile/:id",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
