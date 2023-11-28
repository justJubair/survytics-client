import axios from "axios";

const axiosPublic = axios.create({
    baseURL: "https://survytics-server.vercel.app",
})

export default axiosPublic