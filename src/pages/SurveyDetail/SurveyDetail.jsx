import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import axiosPublic from "../../api/axiosPublic";
import surveyDetailImg from "../../assets/images/surveyDetail.png";
import {
  FaRegThumbsDown,
  FaRegThumbsUp,
  FaThumbsDown,
  FaThumbsUp,
} from "react-icons/fa6";
import SurveyComments from "../../components/SurveyComments/SurveyComments";
const SurveyDetail = () => {
  const { id } = useParams();
  const {
    data: survey = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: [id, "survey"],
    queryFn: async () => {
      const res = await axiosPublic(`/survey/${id}`);
      return res.data;
    },
  });
  const {
    _id,
    title,
    question,
    description,
    category,
    deadline,
    like,
    dislike,
    VoteYes,
    VoteNo,
  } = survey;

  return (
    <div className="max-w-screen-xl mx-auto">
      {/* banner */}
      <div className="h-[400px] pt-28 flex items-center justify-center px-4 lg:px-0">
        <div className=" flex items-center justify-center">
          {/* text */}
          <div className="w-full md:w-1/3">
            <h2 className="text-2xl  md:text-4xl font-semibold text-green-600">
              {title}
            </h2>
          </div>
          {/* animation */}
          <div>
            <img className="" src={surveyDetailImg} alt="" />
          </div>
        </div>
      </div>
      {/* survey details */}
      <div className="bg-base-300 max-w-screen-lg mx-auto p-10 rounded-lg shadow-xl space-y-3 my-10">
        <p>
          <span className="font-semibold">Descripton:</span> {description}
        </p>
        <p>
          <span className="font-semibold">Deadline:</span> {deadline}
        </p>
        <p>
          <span className="font-semibold">Category:</span> {category}
        </p>
        <p className="font-semibold">
          <span className="font-semibold text-xl text-green-600">
            Question:
          </span>{" "}
          {question}
        </p>
        {/* yes and no buttons */}
        <div className="space-x-4">
          <button className="btn bg-green-600 text-white hover:bg-white hover:text-green-600">
            YES
          </button>
          <button className="btn bg-green-600 text-white hover:bg-white hover:text-green-600">
            NO
          </button>
        </div>
        {/* like and dislike button */}
        <div className="flex justify-end items-center gap-4">
          <p className="flex items-center text-lg gap-2">
            {like}{" "}
            <button>
              <FaRegThumbsUp size={20} />
            </button>
          </p>
          <p className="flex items-center text-lg gap-2">
            {dislike}{" "}
            <button>
              <FaRegThumbsDown size={20} />
            </button>
          </p>
        </div>
      </div>
      {/* comment section */}
      <SurveyComments/>
    </div>
  );
};
export default SurveyDetail;
