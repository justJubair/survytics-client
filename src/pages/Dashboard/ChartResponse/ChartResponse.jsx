import SurveyChart from "../../../components/SurveyChart/SurveyChart";
import useSurveys from "../../../hooks/useSurveys";
import Container from "../../../shared/Container/Container";

const ChartResponse = () => {
    const [surveys] = useSurveys("", true, "")
   
    return(
       <Container>
         <div className="flex flex-col justify-center items-center mb-10">
             {
                surveys.map(survey=> <div key={survey._id}>
                    <h2 className="text-center mt-10 mb-4 text-xl font-bold">{survey?.title}</h2>
                    <SurveyChart  voteYes={survey?.VoteYes} voteNo={survey?.VoteNo} width={500}/>
                </div>)
             }
        </div>
       </Container>
    )}
export default ChartResponse;