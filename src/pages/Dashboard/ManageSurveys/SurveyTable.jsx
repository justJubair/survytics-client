/* eslint-disable react/prop-types */
import { FaRegEdit } from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi";
import { Link } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import FeedBackModal from "./FeedBackModal";
import axiosPublic from "../../../api/axiosPublic";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import UnpublishModal from "./UnpublishModal";
const SurveyTable = ({ survey, idx, role, refetch }) => {
  const [surveyId, setSurveyId] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [unpublishModalOpen, setUnpublishModalOpen] = useState(false)
  const [unpublishSurveyId, setUnpublishSurveyId] = useState(null)
  const { data: reports = [] } = useQuery({
    queryKey: [surveyId, "reports"],
    queryFn: async () => {
      const res = await axiosPublic(`/reports?surveyId=${surveyId}`);
      return res.data;
    },
  });

  const handleFeedbacks = (_id) => {
    setIsOpen(true);
    setSurveyId(_id);
  };

  const handleUnpublishModal = async(_id)=>{
    setUnpublishModalOpen(true)
    setUnpublishSurveyId(_id)
  }
  return (
    <>
      <tr className={`${survey?.status === "unpublished" ? "bg-gray-300 text-gray-400" : ""}`}>
        <th>{idx + 1}</th>
        <td>{survey?.title}</td>
        <td>{survey?.deadline}</td>
        <td>{survey?.category}</td>
        {role === "surveyor" &&   <td>
          {" "}
          <Link to={`/dashboard/updateSurvey/${survey._id}`}>
            <FaRegEdit size={20} className="text-cyan-600" />
          </Link>
        </td>}
        {role === "admin" && <td>
          {" "}
         
           <AiFillDelete onClick={()=> handleUnpublishModal(survey._id)} className="btn btn-xs text-red-600" size={45}/>
            <UnpublishModal unpublishModalOpen={unpublishModalOpen} setUnpublishModalOpen={setUnpublishModalOpen} unpublishSurveyId={unpublishSurveyId} refetch={refetch}/>
        </td>}
      
        {role === "surveyor" &&  <td>
          <FiMessageSquare
            onClick={() => handleFeedbacks(survey?._id)}
            size={20}
            className="text-green-600 hover:cursor-pointer"
          />
          <FeedBackModal
            reports={reports}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        </td>}
      
      </tr>
    </>
  );
};
export default SurveyTable;
