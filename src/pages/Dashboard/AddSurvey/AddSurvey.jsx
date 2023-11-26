import Container from "../../../shared/Container/Container";
import SectionTitle from "../../../shared/SectionTitle/SectionTitle";

const AddSurvey = () => {
  return (
    <Container>
      <SectionTitle
        heading="Add A Survey"
        subHeading="New survey || new research"
      />
      {/* survey creation form */}
      <div className="mt-10">
        <form className="space-y-6">
          <input
            name="title"
            type="text"
            placeholder="Survey title"
            className="input input-bordered w-full "
          />
          <div className="flex items-center gap-4">
            <select
              defaultValue="default"
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
            />
          </div>
          <textarea
            className="textarea w-full textarea-bordered"
            placeholder="Description..."
          ></textarea>
        </form>
      </div>
    </Container>
  );
};
export default AddSurvey;
