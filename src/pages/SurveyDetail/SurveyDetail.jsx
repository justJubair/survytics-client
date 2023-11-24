import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import axiosPublic from "../../api/axiosPublic";
import surveyDetailImg from "../../assets/images/surveyDetail.png"

const SurveyDetail = () => {
    const {id} = useParams()
    const {data:survey=[], refetch, isLoading} = useQuery({
        queryKey: [id, "survey"],
        queryFn: async()=>{
            const res = await axiosPublic(`/survey/${id}`)
            return res.data
        }
    })
   
    return(
        <div className="max-w-screen-xl mx-auto">
            <div className="h-[500px] flex items-center justify-center">
            <div className=" flex items-center justify-center">
                {/* text */}
                <div className="md:w-1/3">
                    <h2 className="lg:text-4xl">Shape the Future: Your Voice Matters! Join Our Online Survey Now</h2>
                    <h3>Be Heard, Make a Difference: Dive into our Quick and Engaging Survey to Share Your Insights</h3>
                </div>
                {/* animation */}
                <div>
                    <img src={surveyDetailImg} alt="" />
                </div>
            </div>
            </div>
        </div>
    )}
export default SurveyDetail;