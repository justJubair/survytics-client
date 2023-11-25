/* eslint-disable react/prop-types */
const Comment = ({comment}) => {
    return(
        <div className="flex items-center gap-3 max-w-md">
        <img className="w-14 h-14 object-cover rounded-full" src={comment?.userPhoto} alt="" />
       <div>
         <p className="font-semibold">{comment?.userName}</p>
        <p className="text-sm text-gray-600">{comment?.commentText}</p>
       </div>
    </div>
    )}
export default Comment;