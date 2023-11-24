import { useQuery } from "@tanstack/react-query"
import axiosPublic from "../api/axiosPublic"



const useSurveys = (searchText, asc)=>{
    const {data:surveys=[],refetch, isLoading} = useQuery({
        queryKey: [searchText, asc, "surveys"],
        queryFn: async()=>{
            const res = await axiosPublic(`/surveys?sort=${asc ? "asc" : "desc"}&search=${searchText}`)
            return res.data
        }
    })
    return [surveys, refetch, isLoading]
}

export default useSurveys