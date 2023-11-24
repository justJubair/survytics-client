/* eslint-disable react/prop-types */
const SurveyCard = ({ survey }) => {
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{survey.title}</h2>
          <p>{survey.description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Total vote {survey?.VoteYes+survey?.VoteNo}</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SurveyCard;
