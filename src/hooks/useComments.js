import { useQuery } from "@tanstack/react-query"
import axiosPublic from "../api/axiosPublic"

const useComments = (surveyId)=>{
    
    const {data:comments=[], refetch, } = useQuery({
        enabled: !!surveyId,
        queryKey: [surveyId, "comments"],
        queryFn: async()=>{
            const res = await axiosPublic.get(`/comments?surveyId=${surveyId}`)
            return res.data
        }
    })
 
    return [comments, refetch]
}

export default useComments