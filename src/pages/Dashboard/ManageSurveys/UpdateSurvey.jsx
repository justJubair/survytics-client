import { useState } from "react";
import toast from "react-hot-toast";
import SectionTitle from "../../../shared/SectionTitle/SectionTitle";
import Container from "../../../shared/Container/Container";
import { updateSurvey } from "../../../api";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import axiosSecure from "../../../api/axiosSecure";
import Loader from "../../../shared/Loader/Loader";


const UpdateSurvey = () => {
  const {id} = useParams()
  const {data: survey=[],isLoading} = useQuery({
    queryKey: [id, "survey"],
    queryFn: async()=>{
      const res = await axiosSecure.get(`/dashboard/updateSurvey/${id}`)
      return res.data
    }
  })
  const [category, setCategory] = useState(survey?.category);
  const handleCategory = (e) => {
    setCategory(e.target.value);
  };
  const handleUpdateSurvey = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const question = form.question.value;
    const description = form.description.value;
    const deadline = form.date.value;
    
    // if deadline is passed todays date then disable the submit button
    const dateDiff = new Date(deadline).getTime() - new Date().getTime();
    if (dateDiff < 0) {
      return toast.error("Please choose a valid date");
    }

    const newSurvey = {
      title,
      question,
      description,
      category,
      deadline,
    };
    const dbResponse = await updateSurvey(survey?._id, newSurvey)
    if(dbResponse.modifiedCount>0){
      toast.success("Updated successfully")
      
    }
  
  };
  if(isLoading){
    return <Loader/>
  }
  return (
    <Container>
     <div className="my-10">
     <SectionTitle
        heading="Update Survey"
        subHeading="Edit your surveys"
      />
      {/* survey creation form */}
      <div className="mt-10">
        <form onSubmit={handleUpdateSurvey} className="space-y-5">
          <div className="flex items-center gap-4">
            <div className="w-full">
              <label className="label">
                <span className="label-text">Survey title</span>
              </label>
              <input
                defaultValue={survey?.title}
                name="title"
                type="text"
                placeholder="Survey title"
                className="input input-bordered w-full "
                required
              />
            </div>
            <div className="w-full">
              <label className="label">
                <span className="label-text">Deadline</span>
              </label>
              <input
                defaultValue={survey?.deadline}
                name="date"
                className="input input-bordered w-full "
                type="date"
                required
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <select
              onChange={handleCategory}
              defaultValue={survey.category}
              required
              className="select select-bordered w-full"
            >
              <option disabled value="default">
                Choose a category
              </option>
              <option>Engagement</option>
              <option>Customer</option>
              <option>Wellness</option>
              <option>Technology</option>
            </select>
            <input
              defaultValue={survey?.question}
              name="question"
              type="text"
              placeholder="Survey question"
              className="input input-bordered w-full "
              required
            />
          </div>
          <textarea
            defaultValue={survey?.description}
            className="textarea w-full textarea-bordered"
            name="description"
            placeholder="Description..."
            required
          ></textarea>
          <button
            className="btn w-full text-white bg-gradient-to-r from-cyan-600 to-[#24962a] hover:scale-95"
            type="submit"
          >
            Update Survey
          </button>
        </form>
      </div>
     </div>
    </Container>
  );
};
export default UpdateSurvey;
