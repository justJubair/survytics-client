/* eslint-disable react/prop-types */
const SurveyCategory = ({handleCategory}) => {
  return (
    <div>
      <select onChange={handleCategory} defaultValue="default" className="select select-success w-full max-w-xs">
        <option disabled value="default">
         Choose a category
        </option>
        <option value="Customer">Customer</option>
        <option value="Engagement">Engagement</option>
        <option value="Wellness">Wellness</option>
        <option value="Technology">Technology</option>
      </select>
    </div>
  );
};
export default SurveyCategory;
