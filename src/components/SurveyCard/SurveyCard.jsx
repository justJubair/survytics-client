import { Link } from "react-router-dom";
import Button from "../../shared/Button/Button";

/* eslint-disable react/prop-types */
const SurveyCard = ({ survey }) => {
  return (
    <Link to={`/survey/${survey._id}`}>
      <div className="card bg-base-200 shadow-xl duration-500 hover:cursor-pointer hover:bg-base-300 hover:scale-105">
        <div className="card-body">
          <h2 className="card-title">{survey.title}</h2>
          <p className="text-gray-400">{survey.description}</p>
          <p className="font-semibold text-green-600">Category: {survey.category}</p>
          <div className="card-actions justify-end">
          <Button label={`Total vote ${survey?.VoteYes+survey?.VoteNo}`}/>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default SurveyCard;
