import SurveyCard from "../../components/SurveyCard/SurveyCard";
import SurveyBanner from "../../components/SurveyBanner/SurveyBanner";
import useSurveys from "../../hooks/useSurveys";
import SectionTitle from "../../shared/SectionTitle/SectionTitle";

const Surveys = () => {
    const [surveys] = useSurveys()
   
    return(
        <div>
             
             <SurveyBanner/>
             <SectionTitle heading="Surveys" subHeading="currently running surveys"/>
            <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 gap-4 md:gap-6 md:grid-cols-2  ">
                {
                    surveys.map(survey=> <SurveyCard key={survey._id} survey={survey}/>)
                }
            </div>
        </div>
    )}
export default Surveys;