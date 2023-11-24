import Lottie from "lottie-react";
import surveyAnime from "../../assets/animations/surveyPage.json";
const SurveyBanner = () => {
  return (
    <div className="max-w-screen-xl mx-auto h-[450px] pt-10 lg:pt-28  flex items-center justify-center px-4 lg:px-0 bg-transparent mb-10 md:mb-0">
      <div className="w-full flex flex-col-reverse items-center justify-center  md:flex-row">
        {/* text content */}
        <div className="w-full lg:w-1/3 text-black space-y-4 text-center md:text-start">
          <h1 className="text-2xl md:text-5xl md:leading-tight font-bold leading-tight">
          Our ongoing live online surveys
          </h1>
          <h3 className="text-sm md:text-xl  animate-pulse">
          Need help getting started? Take a look at our online survey templates and samples below.
          </h3>
        </div>
        {/* animation */}
        <div>
          <Lottie
            className="w-72 lg:w-[400px]"
            animationData={surveyAnime}
            loop={true}
          />
        </div>
      </div>
    </div>
  );
};
export default SurveyBanner;
