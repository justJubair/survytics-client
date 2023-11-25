/* eslint-disable react/prop-types */
import { IoMdSend } from "react-icons/io";
import useAuth from "../../hooks/useAuth";
import postComment from "../../api/postComment";
import toast from "react-hot-toast";
const SurveyComments = ({surveyId, surveyTitle}) => {
    const {user} = useAuth()
    const handleComment = async e=>{
        e.preventDefault()
        const commentText = e.target.comment.value;
        const comment = {userName: user?.displayName, userPhoto: user?.photoURL, userEmail: user?.email, surveyId, surveyTitle, commentText}
        const res = await postComment(comment)
        if(res?.insertedId){
            toast.success("Your comment has been added")
            e.target.reset()
        }
    }
    return(
        <div className="max-w-screen-lg mx-auto my-10">
            {/* comments by users */}
            <h3 className="text-xl font-bold text-gray-600 mb-6 border-b-2">Comments..</h3>
            <div className="flex items-center max-w-md">
                <img className="w-20 rounded-full" src="https://discoverymood.com/wp-content/uploads/2020/04/Mental-Strong-Women-min.jpg" alt="" />
               <div>
                 <p className="font-semibold">Lily Singh</p>
                <p className="text-sm text-gray-600">I love this survey sooo much Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, eligendi?</p>
               </div>
            </div>
            {/* comment box form */}
            <div className="mt-8">
                <form onSubmit={handleComment}>
                <textarea className="w-1/2 textarea textarea-success" name="comment" placeholder="Write your comment..."></textarea>
                    <button type="submit" className="absolute -ml-8 mt-10"><IoMdSend className="text-green-600" size={25}/></button>
                </form>
            </div>
        </div>
    )}
export default SurveyComments;