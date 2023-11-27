import toast from "react-hot-toast";
import Container from "../../../shared/Container/Container";
import SectionTitle from "../../../shared/SectionTitle/SectionTitle";
import { useState } from "react";
import { postSurvey } from "../../../api";

const AddSurvey = () => {
  const [category, setCategory] = useState("");
  const handleCategory = (e) => {
    setCategory(e.target.value);
  };
  const handleAddSurvey = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const question = form.question.value;
    const description = form.description.value;
    const deadline = form.date.value;
    const like = 0;
    const dislike = 0;
    const VoteYes = 0;
    const VoteNo = 0;
    const status = "published";
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
      like,
      dislike,
      VoteYes,
      VoteNo,
      status,
      deadline,
    };
  
    const dbResponse = await postSurvey(newSurvey)
    if(dbResponse.insertedId){
      toast.success("Your survey has been added")
      form.reset()
    }
  };
  return (
    <Container>
     <div className="my-10">
     <SectionTitle
        heading="Add  Survey"
        subHeading="New survey || new research"
      />
      {/* survey creation form */}
      <div className="mt-10">
        <form onSubmit={handleAddSurvey} className="space-y-5">
          <div className="flex items-center gap-4">
            <div className="w-full">
              <label className="label">
                <span className="label-text">Survey title</span>
              </label>
              <input
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
              defaultValue="default"
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
              name="question"
              type="text"
              placeholder="Survey question"
              className="input input-bordered w-full "
              required
            />
          </div>
          <textarea
            className="textarea w-full textarea-bordered"
            name="description"
            placeholder="Description..."
            required
          ></textarea>
          <button
            disabled={!category}
            className="btn w-full text-white bg-gradient-to-r from-cyan-600 to-[#24962a] hover:scale-95"
            type="submit"
          >
            Add Survey
          </button>
        </form>
      </div>
     </div>
    </Container>
  );
};
export default AddSurvey;
