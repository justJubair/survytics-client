import axiosSecure from "./axiosSecure";

const postComment = async (comment) => {
  try {
    const res = await axiosSecure.post("/comments", comment);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export default postComment;
