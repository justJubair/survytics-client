import axiosSecure from "./axiosSecure";
import axiosPublic from "./axiosPublic"

// Post a comment
export const postComment = async (comment) => {
  try {
    const res = await axiosSecure.post("/comments", comment);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};


// Post a user
export const saveUser = async(user)=>{
    try{
        const res = await axiosPublic.post("/users", user)
        return res.data
    }
    catch(err){
        console.log(err)
    }
}

// Patch; vote count;
export const patchVoteCount = async(surveyId, operation)=>{
  try{
    const res = await axiosSecure.patch(`/survey/${surveyId}`, {increase: 1, operation})
    return res.data
  }
  catch(err){
    console.log(err)
  }
}
// Patch; increase No vote;
// export const patchVoteNo = async(surveyId)=>{
//   try{
//     const res = await axiosSecure.patch(`/survey/${surveyId}`, {decrease: 1})
//     return res.data
//   }
//   catch(err){
//     console.log(err)
//   }
// }




