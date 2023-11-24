import SurveyCard from "../../components/SurveyCard/SurveyCard";
import SurveyBanner from "../../components/SurveyBanner/SurveyBanner";
import useSurveys from "../../hooks/useSurveys";
import SurveySearch from "../../components/SurveySearch/SurveySearch";
import { useState } from "react";
import SurveyCategory from "../../components/SurveyCategory/SurveyCategory";

const Surveys = () => {
  const [searchText, setSearchText] = useState("");
  const [category, setCategory] = useState("")
  const [asc, setAsc] = useState(true);
  const [surveys] = useSurveys(searchText, asc, category);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchText(e.target.search.value);
  };

  const handleCategory =e=>{
    setCategory(e.target.value)
  }
  return (
    <div>
      <SurveyBanner />
     
      {/* survey search, sort and filter functionalities */}

      <div className="max-w-screen-xl mx-auto flex justify-center items-center mt-6 px-4 lg:px-0">
        <div className=" flex items-center justify-between flex-wrap w-full gap-6">
          <SurveySearch handleSearch={handleSearch} />
         <div className="flex items-center gap-6">
         <SurveyCategory handleCategory={handleCategory}/>
          <button
            onClick={() => setAsc(!asc)}
            className="btn text-green-600 hover:text-white hover:bg-green-600"
          >
            {asc ? "Vote: High to Low" : "Vote: Low to High"}
          </button>
         </div>
       
        </div>
      </div>

      <div className="max-w-screen-xl mt-16 mx-auto px-4 grid grid-cols-1 gap-4 md:gap-6 md:grid-cols-2 lg:px-0">
        {surveys.map((survey) => (
          <SurveyCard key={survey._id} survey={survey} />
        ))}
      </div>
    </div>
  );
};
export default Surveys;
