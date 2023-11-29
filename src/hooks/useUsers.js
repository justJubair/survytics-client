import { useQuery } from "@tanstack/react-query"
import useAxios from "./useAxios"


const useUsers = (userFilter)=>{
    const axiosSecure = useAxios()
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