/* eslint-disable react/prop-types */
import { FaRegEdit } from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi";
import { Link } from "react-router-dom";
import FeedBackModal from "./FeedBackModal";
import axiosPublic from "../../../api/axiosPublic";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
const SurveyTable = ({ survey, idx }) => {
  const [surveyId, setSurveyId] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const { data: reports = [] } = useQuery({
    queryKey: [surveyId, "reports"],
    queryFn: async () => {
      const res = await axiosPublic(`/reports?surveyId=${surveyId}`);
      return res.data;
    },
  });

  const handleFeedbacks = async (_id) => {
    setIsOpen(true);
    setSurveyId(_id);
  };
  return (
    <>
      <tr>
        <th>{idx + 1}</th>
        <td>{survey?.title}</td>
        <td>{survey?.deadline}</td>
        <td>{survey?.status}</td>
        <td>
          {" "}
          <Link to={`/dashboard/updateSurvey/${survey._id}`}>
            <FaRegEdit size={20} className="text-cyan-600" />
          </Link>
        </td>
        <td>
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
        </td>
        {/* Open the modal using document.getElementById('ID').showModal() method */}
      </tr>
    </>
  );
};
export default SurveyTable;
