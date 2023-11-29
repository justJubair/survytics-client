import { useEffect } from "react"
import axiosSecure from "../api/axiosSecure"
import useAuth from "./useAuth"
import { useNavigate } from "react-router-dom"


const useAxios = ()=>{
    const {logOut} = useAuth()
    const navigate = useNavigate()
    useEffect(()=>{
        axiosSecure.interceptors.response.use(res=>{
            console.log("Interceptor")
            return res;
        }, error=>{
            if(error.response.status===401 || error.response.status===403){
              
                logOut()
                .then(()=>{
                    navigate("/login")
                })
                .catch(error=>{
                    console.log(error)
                })

            }
        })
    },[logOut, navigate])
    return axiosSecure
}

export default useAxios