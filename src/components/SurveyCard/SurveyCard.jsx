import Button from "../../shared/Button/Button";

/* eslint-disable react/prop-types */
const SurveyCard = ({ survey }) => {
  return (
    <div>
      <div className="card bg-base-100 shadow-xl duration-500 hover:cursor-pointer hover:bg-base-200 hover:scale-105">
        <div className="card-body">
          <h2 className="card-title">{survey.title}</h2>
          <p>{survey.description}</p>
          <div className="card-actions justify-end">
          <Button label={`Total vote ${survey?.VoteYes+survey?.VoteNo}`}/>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SurveyCard;
