import axios from "axios";

export const axiosInstance=axios.create({
    baseURL:"https://chatapp-jm10.onrender.com/api",
    withCredentials:true,
})
