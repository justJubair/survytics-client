import axios from "axios";

const axiosSecure = axios.create({
    baseURL: "http://localhost:5000",
    // baseURL: "https://survytics-server.vercel.app",
    withCredentials: true
})

export default axiosSecure