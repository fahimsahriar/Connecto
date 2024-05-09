import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    localStorage.getItem("user") !== null
      ? JSON.parse(localStorage.getItem("user"))
      : null
  );
  
  // Access environment variable
  const baseUrl = import.meta.env.VITE_REACT_APP_BACKEND_URL;

  const login = async (inputs) => {
    try {
      const res = await axios.post(
        `${baseUrl}/auth/login`,
        inputs,
        {
          withCredentials: true,
        }
      );
  
      setCurrentUser(res.data);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        // Handle 404 error specifically (Not Found)
        throw new Error('User not found.'); // Throw an error to be caught by the login component
      } else {
        // Handle other errors
        //console.error('An error occurred while logging in:', error);
        // You can also provide feedback to the user here, such as displaying a generic error message
      }
    }
  };
  
  
  const logout = async () => {
    const res = await axios.post(
      `${baseUrl}/auth/logout`
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

export default {AuthContext, AuthContextProvider};
