import { useQuery } from "@tanstack/react-query"
import axiosPublic from "../api/axiosPublic"

const useVoted = (surveyId, userEmail)=>{
    const {data:isVoted=null} = useQuery({
        enabled: !!surveyId || !!userEmail,
        queryKey: [surveyId, userEmail, "isVoted"],
        queryFn: async()=>{
            const res = await axiosPublic.get(`/isVoted?surveyId=${surveyId}&userEmail=${userEmail}`)
            return res.data
        }
    })
    return [isVoted]
}

export default useVoted