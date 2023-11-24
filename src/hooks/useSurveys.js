import { useQuery } from "@tanstack/react-query"
import axiosPublic from "../api/axiosPublic"



const useSurveys = ()=>{
    const {data:surveys=[],refetch, isLoading} = useQuery({
        queryKey: ["surveys"],
        queryFn: async()=>{
            const res = await axiosPublic("/surveys")
            return res.data
        }
    })
    return [surveys, refetch, isLoading]
}

export default useSurveys