import React, { useContext } from "react";
import "./main.scss";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { DarkModeContextProvider } from "./Context/DarkModeContext.jsx";
import { AuthContextProvider } from "./Context/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <DarkModeContextProvider>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </DarkModeContextProvider>
);
