import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://chatapp-jm10.onrender.com/api", // ensure /api if your routes are prefixed
  withCredentials: true, // ✅ send cookies automatically
});
