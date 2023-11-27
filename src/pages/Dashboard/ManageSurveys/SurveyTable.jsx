/* eslint-disable react/prop-types */
import { FaRegEdit } from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi";
import { Link } from "react-router-dom";
const SurveyTable = ({survey, idx}) => {
  return (
    <>
      <tr>
        <th>{idx+1}</th>
        <td>{survey?.title}</td>
        <td>{survey?.deadline}</td>
        <td>{survey?.status}</td>
        <td> <Link to={`/dashboard/updateSurvey/${survey._id}`}><FaRegEdit size={20} className="text-cyan-600"/></Link>
        </td>
        <td><FiMessageSquare size={20} className="text-green-600"/></td>
        
      </tr>
       
    </>
  );
};
export default SurveyTable;
