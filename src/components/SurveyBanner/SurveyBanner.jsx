import Lottie from "lottie-react";
import surveyAnime from "../../assets/animations/surveyPage.json";
const SurveyBanner = () => {
  return (
    <div className="max-w-screen-xl mx-auto pt-36 px-4 lg:px-0">
      <div className="w-full flex items-center justify-center  md:items-start">
        {/* text content */}
        <div className="w-full lg:w-1/3 text-black space-y-4">
          <h1 className="text-2xl md:text-4xl font-bold leading-tight">
          Our ongoing live online surveys
          </h1>
          <h3 className="text-sm md:text-xl  animate-pulse">
          Need help getting started? Take a look at our online survey templates and samples below.
          </h3>
        </div>
        {/* animation */}
        <div>
          <Lottie
            className="w-48 md:w-72 lg:w-[400px]"
            animationData={surveyAnime}
            loop={true}
          />
        </div>
      </div>
    </div>
  );
};
export default SurveyBanner;
