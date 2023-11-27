/* eslint-disable react/prop-types */
import { FaRegEdit } from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi";
import UpdateSurveyModal from "./UpdateSurveyModal";
const SurveyTable = ({survey, idx}) => {
  return (
    <>
      <tr>
        <th>{idx+1}</th>
        <td>{survey?.title}</td>
        <td>{survey?.deadline}</td>
        <td>{survey?.status}</td>
        <td   onClick={() => document.getElementById("my_modal_6").showModal()} className="hover:cursor-pointer"><FaRegEdit size={20} className="text-cyan-600"/></td>
        <td><FiMessageSquare size={20} className="text-green-600"/></td>
        
      </tr>
        <UpdateSurveyModal/>
    </>
  );
};
export default SurveyTable;
