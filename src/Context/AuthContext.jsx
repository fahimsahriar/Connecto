import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    localStorage.getItem("darkMode") !== null
      ? JSON.parse(localStorage.getItem("user"))
      : {
          id: 1,
          name: "Fahim Sahriar",
          profilePic: "/images/login.jpg",
        }
  );
  // console.log(localStorage.getItem("user"));

  const login = async (inputs) => {
    const res = await axios.post(
      "http://localhost:8800/api/auth/login",
      inputs,
      {
        withCredentials: true,
      }
    );

    setCurrentUser(res.data);
  };
  const logout = async () => {
    const res = await axios.post(
      "http://localhost:8800/api/auth/logout",
    );

    setCurrentUser(null);
    console.log(res.data);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
