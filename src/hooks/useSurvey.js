import { useQuery } from "@tanstack/react-query"
import axiosPublic from "../api/axiosPublic"

const useSurvey = (surveyId)=>{
    const {data:survey=[], refetch, isLoading} = useQuery({
        enabled: !!surveyId,
        queryKey: [surveyId, "survey"],
        queryFn: async()=>{
            const res = await axiosPublic(`/survey/${surveyId}`)
            return res.data
        }
    })
    return [survey, refetch, isLoading]
}

export default useSurvey