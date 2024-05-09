import axios from "axios";

// Create axios instance with baseURL taken from environment variable
export const makeRequest = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_BACKEND_URL,
  withCredentials: true,
});
