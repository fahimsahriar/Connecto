import axios from "axios";

// export const makeRequest = axios.create({
//   baseURL: "http://localhost:8800/api/",
//   withCredentials: true,
// });
export const makeRequest = axios.create({
  baseURL: "https://connecto-api.onrender.com/api/",
  withCredentials: true,
});