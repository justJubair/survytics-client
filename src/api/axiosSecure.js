import axios from "axios";

const axiosSecure = axios.create({
    baseURL: "https://survytics-server.vercel.app",
    withCredentials: true
})

export default axiosSecure