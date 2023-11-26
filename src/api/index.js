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

// Post; user information when they vote
export const saveUserVotingDetails = async(votingDetails)=>{
  try{
    const res = await axiosPublic.post("/votes", {votingDetails})
    return res.data
  }
  catch(err){
    console.log(err)
  }
}

// Patch; like and dislike count
export const patchLikeAndDislike = async(surveyId, operation)=>{
  try{
    const res = await axiosSecure.patch(`/surveyLikesAndDislikes/${surveyId}`, {increase: 1, operation})
    return res.data
  }
  catch(err){
    console.log(err)
  }
}

// Post; payment details
export const savePaymentDetails = async(payment)=>{
  try{
    const res = await axiosSecure.put("/payments", payment)
    return res.data
  }
  catch(err){
    console.log(err)
  }
}



