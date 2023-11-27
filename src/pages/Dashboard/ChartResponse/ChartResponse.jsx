import SurveyChart from "../../../components/SurveyChart/SurveyChart";
import useSurveys from "../../../hooks/useSurveys";
import Container from "../../../shared/Container/Container";

const ChartResponse = () => {
  const [surveys] = useSurveys("", true, "");

  return (
    <Container>
      <div className="flex flex-col justify-center items-center mb-10">
        {surveys.map((survey) => (
          <div key={survey._id}>
            <div className="mt-10 mb-4">
              <h2 className="text-center  text-xl font-bold">{survey.title}</h2>
              <p className="text-center text-gray-500 mt-1 text-sm">
                {survey?.question}
              </p>
            </div>
            <SurveyChart
              voteYes={survey?.VoteYes}
              voteNo={survey?.VoteNo}
              width={500}
            />
          </div>
        ))}
      </div>
    </Container>
  );
};
export default ChartResponse;
