import { useQuery } from "@tanstack/react-query"
import axiosSecure from "../api/axiosSecure"

const useRole = (email)=>{
    const {data:role=null, isLoading} = useQuery({
        enabled: !!email,
        queryKey: [email, "role"],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/role?email=${email}`)
            return res.data
        }
    })
    return [role, isLoading]
}

export default useRole