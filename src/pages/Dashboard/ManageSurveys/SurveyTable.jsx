/* eslint-disable react/prop-types */
import { FaRegEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { FiMessageSquare } from "react-icons/fi";
import { Link } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import FeedBackModal from "./FeedBackModal";
import axiosPublic from "../../../api/axiosPublic";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import UnpublishModal from "./UnpublishModal";
import { publishSurvey } from "../../../api";
import toast from "react-hot-toast";
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

  const handlePublish = async(_id)=>{
    const dbResponse = await publishSurvey(_id)
    if(dbResponse.modifiedCount>0){
      toast.success("Published Successful")
      refetch()
    }

  }
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
        <td>{role === "surveyor" ? survey?.category : survey?.status}</td>
        {role === "surveyor" &&   <td>
          {" "}
          <Link to={`/dashboard/updateSurvey/${survey._id}`}>
            <FaRegEdit size={20} className="text-cyan-600" />
          </Link>
        </td>}
        {role === "admin" && <td className="flex gap-6 items-center">
         
          <FaCheck onClick={()=> handlePublish(survey._id)} className={`btn btn-xs text-green-600 ${survey?.status!=="pending" ? "hidden" : ""}`} size={40}/>
           <AiFillDelete onClick={()=> handleUnpublishModal(survey._id)} className={`btn btn-xs text-red-600 ${survey?.status === "unpublished" ? "hidden" : ""}`} size={45}/>
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
