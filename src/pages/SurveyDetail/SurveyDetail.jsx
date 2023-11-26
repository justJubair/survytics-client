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
import toast from "react-hot-toast";
import { patchLikeAndDislike, patchVoteCount, saveUserVotingDetails } from "../../api";
import useAuth from "../../hooks/useAuth";
import Loader from "../../shared/Loader/Loader";
import SurveyChart from "../../components/SurveyChart/SurveyChart";
import useVoted from "../../hooks/useVoted";
import { useState } from "react";

const SurveyDetail = () => {
  const { user, loading } = useAuth();
  const { id } = useParams();
  const [buttonDisable, setButtonDisable] = useState(false)
  const [liked, setLiked] = useState(false)
  const [disliked, setDisliked] = useState(false)
 
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
  const [isVoted] = useVoted(survey?._id, user?.email)
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
        refetch()
      }
    }
  };
  const handleVoteNo = async () => {
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
        refetch()
      }
    }
  };

  const handleLike = async()=>{
    const res = await patchLikeAndDislike(_id, "like")
    refetch()
    if(res.modifiedCount>0){
      setButtonDisable(true)
      setLiked(true)
    }
  }
  const handleDislike = async()=>{
    const res = await patchLikeAndDislike(_id, "dislike")
    refetch()
    if(res.modifiedCount>0){
      setButtonDisable(true)
      setDisliked(true)
    }
  }
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
      
       {
          isVoted ?   <SurveyChart voteYes={VoteYes} voteNo={VoteNo} /> :  <div>
          <p className="font-semibold mb-4">
             <span className="font-semibold text-xl text-green-600">
               Question:
             </span>{" "}
             {question}
           </p>
           {/* yes and no buttons */}
           <div className="space-x-4">
             <button
               onClick={handleVoteYes}
               className="btn bg-green-600 text-white hover:bg-white hover:text-green-600"
             >
               YES
             </button>
             <button
               onClick={handleVoteNo}
               className="btn bg-green-600 text-white hover:bg-white hover:text-green-600"
             >
               NO
             </button>
           </div>
          </div>
        }
      
      
        {/* like and dislike button */}
        <div className="flex justify-end items-center gap-4">
          <p className="flex items-center text-lg gap-2">
            {like}{" "}
            <button disabled={buttonDisable} onClick={handleLike}>
              {liked ? <FaThumbsUp size={20}/> :   <FaRegThumbsUp size={20} />}
            
            </button>
          </p>
          <p className="flex items-center text-lg gap-2">
            {dislike}{" "}
            <button disabled={buttonDisable} onClick={handleDislike}>
              {disliked ? <FaThumbsDown size={20}/> :   <FaRegThumbsDown size={20} />}
            </button>
          </p>
        </div>
      </div>
    
      {/* comment section */}
      <SurveyComments surveyId={_id} surveyTitle={title} />
    </div>
  );
};
export default SurveyDetail;
