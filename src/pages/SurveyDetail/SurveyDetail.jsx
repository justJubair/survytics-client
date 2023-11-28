import { useNavigate, useParams } from "react-router-dom";
import surveyDetailImg from "../../assets/images/surveyDetail.png";
import {
  FaRegThumbsDown,
  FaRegThumbsUp,
  FaThumbsDown,
  FaThumbsUp,
} from "react-icons/fa6";
import { SlOptions } from "react-icons/sl";
import SurveyComments from "../../components/SurveyComments/SurveyComments";
import toast from "react-hot-toast";
import {
  patchLikeAndDislike,
  patchVoteCount,
  saveUserVotingDetails,
} from "../../api";
import useAuth from "../../hooks/useAuth";
import Loader from "../../shared/Loader/Loader";
import SurveyChart from "../../components/SurveyChart/SurveyChart";
import useVoted from "../../hooks/useVoted";
import { useState } from "react";
import SurveyReport from "../../components/SurveyReport/SurveyReport";
import useSurvey from "../../hooks/useSurvey";
import useRole from "../../hooks/useRole";

const SurveyDetail = () => {
  const { user, loading } = useAuth();
  const [role] = useRole(user?.email)
  
  const navigate = useNavigate()
  const { id } = useParams();
  const [buttonDisable, setButtonDisable] = useState(false);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const [survey, refetch, isLoading] = useSurvey(id);
  const [isVoted, isVotedRefetch] = useVoted(survey?._id, user?.email);
 
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

  const handleVoteYes = async () => {
    if(!user){
      return navigate("/login")
    }
  
    const res = await patchVoteCount(_id, "yes");
    if (res.modifiedCount > 0) {
      const votingDetails = {
        surveyId: _id,
        surveyTitle: title,
        userName: user?.displayName,
        userEmail: user?.email,
        voted: "yes",
      };
      const dbResponse = await saveUserVotingDetails(votingDetails);
      if (dbResponse.insertedId) {
        toast.success("Your vote has been added");
        refetch();
        isVotedRefetch();
      }
    }
  };
  const handleVoteNo = async () => {
    if(!user){
      return navigate("/login")
    }
    const res = await patchVoteCount(_id, "no");
    if (res.modifiedCount > 0) {
      const votingDetails = {
        surveyId: _id,
        surveyTitle: title,
        userName: user?.displayName,
        userEmail: user?.email,
        voted: "no",
      };
      const dbResponse = await saveUserVotingDetails(votingDetails);
      if (dbResponse.insertedId) {
        toast.success("Your vote has been added");
        refetch();
        isVotedRefetch();
      }
    }
  };

  const handleLike = async () => {
    const res = await patchLikeAndDislike(_id, "like");
    refetch();
    if (res.modifiedCount > 0) {
      setButtonDisable(true);
      setLiked(true);
    }
  };
  const handleDislike = async () => {
    const res = await patchLikeAndDislike(_id, "dislike");
    refetch();
    if (res.modifiedCount > 0) {
      setButtonDisable(true);
      setDisliked(true);
    }
  };
  if (loading || isLoading) {
    return <Loader />;
  }

  return (
    <div className="max-w-screen-xl mx-auto px-4">
      {/* banner */}

      <div className="h-[400px] pt-28 flex items-center justify-center px-4 lg:px-0">
        <div className=" flex items-center justify-center">
          {/* text */}
          <div className="w-full md:w-1/2">
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
      <div className="relative bg-base-300 max-w-screen-lg mx-auto rounded-lg shadow-xl  my-10">
        {/* Report modal */}
        <button
          onClick={() => document.getElementById("my_modal_5").showModal()}
          className="absolute right-4 top-4 hover:cursor-pointer"
        >
          <SlOptions />
          {/* Open the modal using document.getElementById('ID').showModal() method */}
        </button>
        {/* modal content */}
        <SurveyReport role={role} surveyId={_id} surveyTitle={title} />
        <div className="px-10 pb-10 pt-14 space-y-3">
          <p>
            <span className="font-semibold">Descripton:</span> {description}
          </p>
          <p>
            <span className="font-semibold">Deadline:</span> {deadline}
          </p>
          <p>
            <span className="font-semibold">Category:</span> {category}
          </p>

          {isVoted ? (
            <SurveyChart voteYes={VoteYes} voteNo={VoteNo} width={300}/>
          ) : (
            <div>
              <p className="font-semibold mb-4">
                <span className="font-semibold text-xl text-green-600">
                  Question:
                </span>{" "}
                {question}
              </p>
              {/* yes and no buttons */}
              <div className="space-x-4">
                <button
                  disabled={(role === "surveyor" || role=== "admin") && true }
                  onClick={handleVoteYes}
                  className="btn bg-green-600 text-white hover:bg-white hover:text-green-600"
                >
                  YES
                </button>
                <button
                   disabled={(role === "surveyor" || role=== "admin") && true }
                  onClick={handleVoteNo}
                  className="btn bg-green-600 text-white hover:bg-white hover:text-green-600"
                >
                  NO
                </button>
              </div>
            </div>
          )}

          {/* like and dislike button */}
          <div className="flex justify-end items-center gap-4">
            <p className="flex items-center text-lg gap-2">
              {like}{" "}
              <button disabled={buttonDisable} onClick={handleLike}>
                {liked ? <FaThumbsUp size={20} /> : <FaRegThumbsUp size={20} />}
              </button>
            </p>
            <p className="flex items-center text-lg gap-2">
              {dislike}{" "}
              <button disabled={buttonDisable} onClick={handleDislike}>
                {disliked ? (
                  <FaThumbsDown size={20} />
                ) : (
                  <FaRegThumbsDown size={20} />
                )}
              </button>
            </p>
          </div>
        </div>
      </div>

      {/* comment section */}
      <SurveyComments surveyId={_id} surveyTitle={title} role={role} />
    </div>
  );
};
export default SurveyDetail;
