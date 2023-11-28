import { useQuery } from "@tanstack/react-query"
import axiosSecure from "../api/axiosSecure"

const useUsers = ()=>{
    const {data:users=[]} =useQuery({
        queryKey: ["users"],
        queryFn: async()=>{
            const res = await axiosSecure.get("/users")
            return res.data
        }
    })

    return [users]
}

export default useUsers