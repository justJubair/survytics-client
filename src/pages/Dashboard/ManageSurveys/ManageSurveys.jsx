import useSurveys from "../../../hooks/useSurveys";
import Container from "../../../shared/Container/Container";
import SectionTitle from "../../../shared/SectionTitle/SectionTitle";
import SurveyTable from "./SurveyTable";

const ManageSurveys = () => {
  const [surveys] = useSurveys("", true, "");

  return (
    <div className="my-10">
      <Container>
        <SectionTitle
          heading="Manage All Surveys"
          subHeading="Update || Feedbacks || and more"
        />
        <div>
          <div className="overflow-x-auto">
            <table className="table table-zebra">
              {/* head */}
              <thead>
                <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Deadline</th>
                  <th>Status</th>
                  <th>Action</th>
                  <th>Feedbacks</th>
                </tr>
              </thead>
              <tbody>
                {surveys.map((survey, idx) => (
                  <SurveyTable key={survey._id} idx={idx} survey={survey} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default ManageSurveys;
