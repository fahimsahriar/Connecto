import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    localStorage.getItem("user") !== null
      ? JSON.parse(localStorage.getItem("user"))
      : null
  );
  // console.log(localStorage.getItem("user"));

  const login = async (inputs) => {
    const res = await axios.post(
      "https://connecto-api.onrender.com",
      inputs,
      {
        withCredentials: true,
      }
    );

    setCurrentUser(res.data);
  };
  const logout = async () => {
    const res = await axios.post(
      "https://connecto-api.onrender.com",
    );

    setCurrentUser(null);
    console.log(res.data);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout, setCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default {AuthContext, AuthContextProvider}
