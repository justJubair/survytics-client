import { useQuery } from "@tanstack/react-query"
import axiosPublic from "../api/axiosPublic"



const useSurveys = (searchText, asc, category)=>{
    const {data:surveys=[],refetch, isLoading} = useQuery({
        queryKey: [searchText, asc, category, "surveys"],
        queryFn: async()=>{
            const res = await axiosPublic(`/surveys?sort=${asc ? "asc" : "desc"}&search=${searchText}&category=${category}`)
            return res.data
        }
    })
    return [surveys, refetch, isLoading]
}

export default useSurveys