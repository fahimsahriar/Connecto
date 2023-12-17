import { createContext, useEffect, useState } from "react";

export const DarkModeContext = createContext();

export const DarkModeContextProvider = ({ children }) => {
  // const [darkMode, setDarkMode] = useState(localStorage.getItem("darkMode") || true);
  const [darkMode, setDarkMode] = useState(localStorage.getItem("darkMode") !== null ? JSON.parse(localStorage.getItem("darkMode")) : false);
  // console.log(localStorage.getItem("darkMode"));
  const toggle = ()=> {
    setDarkMode(!darkMode);
  };
  
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggle }}>
      {children}
    </DarkModeContext.Provider>
  );
};
