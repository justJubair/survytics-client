import { useQuery } from "@tanstack/react-query"
import axiosSecure from "../api/axiosSecure"

const useUsers = (userFilter)=>{
    const {data:users=[], isLoading, refetch} =useQuery({
        queryKey: [userFilter, "users"],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/users?userFilter=${userFilter}`)
            return res.data
        }
    })

    return [users, isLoading, refetch]
}

export default useUsers