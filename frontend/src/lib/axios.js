import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://chatapp-1-juyt.onrender.com/api", // ensure /api if your routes are prefixed
  withCredentials: true, // ✅ send cookies automatically
});
