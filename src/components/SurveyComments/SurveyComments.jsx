/* eslint-disable react/prop-types */
import { IoMdSend } from "react-icons/io";
import useAuth from "../../hooks/useAuth";

import toast from "react-hot-toast";
import useComments from "../../hooks/useComments";
import Comment from "./Comment";
import { postComment } from "../../api";
const SurveyComments = ({ surveyId, surveyTitle, role }) => {
  const [comments, refetch] = useComments(surveyId);

  const { user } = useAuth();
  const handleComment = async (e) => {
    e.preventDefault();
    const commentText = e.target.comment.value;
    const comment = {
      userName: user?.displayName,
      userPhoto: user?.photoURL,
      userEmail: user?.email,
      surveyId,
      surveyTitle,
      commentText,
    };
    const res = await postComment(comment);
    if (res?.insertedId) {
      toast.success("Your comment has been added");
      e.target.reset();
      refetch();
    }
  };
  return (
    <div className="max-w-screen-lg mx-auto my-10">
      {/* comments by users */}
      <h3 className="text-xl font-bold text-gray-600 mb-6 border-b-2">
        Comments..
      </h3>
      <div className="space-y-6">
        {comments.map((comment) => (
          <Comment key={comment._id} comment={comment} />
        ))}
      </div>
      {/* comment box form */}
      <div className="mt-8">
        <form onSubmit={handleComment}>
          <textarea
        disabled={role !=="pro-user" && true}
            className="w-full md:w-1/2 textarea textarea-success"
            name="comment"
            placeholder="Write your comment..."
          ></textarea>
          <button disabled={role !=="pro-user" && true} type="submit" className="absolute -ml-8 mt-10">
            <IoMdSend className="text-green-600" size={25} />
          </button>
        </form>
      </div>
    </div>
  );
};
export default SurveyComments;
