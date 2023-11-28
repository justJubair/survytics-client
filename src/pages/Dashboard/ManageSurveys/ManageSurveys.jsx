import useAuth from "../../../hooks/useAuth";
import useRole from "../../../hooks/useRole";
import useSurveys from "../../../hooks/useSurveys";
import Container from "../../../shared/Container/Container";
import SectionTitle from "../../../shared/SectionTitle/SectionTitle";
import SurveyTable from "./SurveyTable";

const ManageSurveys = () => {
  const [surveys, refetch] = useSurveys("", true, "");
  const {user} = useAuth()
  const [role] = useRole(user?.email)
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
                  {role === "surveyor" &&  <th>Feedbacks</th>}
                 
                </tr>
              </thead>
              <tbody>
                {surveys.map((survey, idx) => (
                  <SurveyTable key={survey._id} idx={idx} survey={survey} role={role} refetch={refetch}/>
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
