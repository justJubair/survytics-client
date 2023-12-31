import axiosSecure from "./axiosSecure";
import axiosPublic from "./axiosPublic";

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
export const saveUser = async (user) => {
  try {
    const res = await axiosPublic.post("/users", user);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

// Patch; update a users role via admin
export const updateUserRole = async(id, role)=>{
  try{
    const res = await axiosSecure.patch(`/user/${id}`, role)
    return res.data
  }
  catch(err){
    console.log(err)
  }
}

// Patch; vote count;
export const patchVoteCount = async (surveyId, operation) => {
  try {
    const res = await axiosSecure.patch(`/survey/${surveyId}`, {
      increase: 1,
      operation,
    });
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

// Post; user information when they vote
export const saveUserVotingDetails = async (votingDetails) => {
  try {
    const res = await axiosPublic.post("/votes", { votingDetails });
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

// Patch; like and dislike count
export const patchLikeAndDislike = async (surveyId, operation) => {
  try {
    const res = await axiosSecure.patch(`/surveyLikesAndDislikes/${surveyId}`, {
      increase: 1,
      operation,
    });
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

// Post; payment details
export const savePaymentDetails = async (payment) => {
  try {
    const res = await axiosSecure.put("/payments", payment);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

// Post; a survey as a surveyor
export const postSurvey = async (survey) => {
  try {
    const res = await axiosSecure.post("/surveys", survey);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

// Publish; a survey as a admin
export const publishSurvey= async(id)=>{
  try{
    const res = await axiosSecure.patch(`/surveyPublish/${id}`)
    return res.data
  }
  catch(err){
    console.log(err)
  }
}

// Unpublish; a survey as a admin
export const unpublishSurvey =async(id)=>{
  try{
    const res = await axiosSecure.put(`/surveyUnpublish/${id}`)
    return res.data
  }
  catch(err){
    console.log(err)
  }
}

// POST; a report message as a admin
export const postReportAdmin = async(message)=>{
  try{
    const res = await axiosSecure.post("/reportAdmin", message)
    return res.data
  }
  catch(err){
    console.log(err)
  }
}

// Put; update a survey as surveyor;
export const updateSurvey = async(surveyId ,survey)=>{
  try{
    const res = await axiosSecure.put(`/updateSurvey/${surveyId}`, survey)
    return res.data
  }
  catch(err){
    console.log(err)
  }
}


// Post; a report
export const postReport = async (report) => {
  try {
    const res = await axiosPublic.post("/reports", report);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};



