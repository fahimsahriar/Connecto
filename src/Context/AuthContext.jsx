import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    localStorage.getItem("user") || ({
      id: 1,
      name: "Fahim Sahriar",
      profilePic: "/images/login.jpg",
    })
  );

  const login = () => {
    setCurrentUser({
      id: 1,
      name: "Sifat Ahmed",
      profilePic: "/images/login.jpg",
    });
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};
