import { useQuery } from "@tanstack/react-query"
import axiosSecure from "../api/axiosSecure"

const useRole = (email)=>{
    const {data:role=null, isLoading, refetch} = useQuery({
        enabled: !!email,
        queryKey: [email, "role"],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/role?email=${email}`)
            return res.data
        }
    })
    return [role, isLoading, refetch]
}

export default useRole