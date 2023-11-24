import SurveyCard from "../../components/SurveyCard/SurveyCard";
import SurveyBanner from "../../components/SurveyBanner/SurveyBanner";
import useSurveys from "../../hooks/useSurveys";

const Surveys = () => {
    const [surveys] = useSurveys()
   
    return(
        <div>
             
             <SurveyBanner/>
            <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:px-0">
                {
                    surveys.map(survey=> <SurveyCard key={survey._id} survey={survey}/>)
                }
            </div>
        </div>
    )}
export default Surveys;