import ContainerBig from "../../shared/ContainerBig/ContainerBig";
import SectionTitle from "../../shared/SectionTitle/SectionTitle";
import { IoIosArrowDown } from "react-icons/io";
import createAnime from "../../assets/animations/create.json"
import shareAnime from "../../assets/animations/share.json"
import analyseAnime from "../../assets/animations/analyse.json"
import Lottie from "lottie-react";
const HowItWorks = () => {
  return (
    <div className="relative mt-16 py-16 bg-green-200 ">
      <ContainerBig>
        {/* Arro icon */}
        <div className="flex justify-center">
          <span className="absolute -top-5 bg-white px-10 rounded-b-full">
            <IoIosArrowDown size={50} />
          </span>
        </div>
        <SectionTitle
          heading="Here's how it works"
          subHeading="Effortlessly create your survey questions, distribute your survey, and view real-time results with ease. It's that easy!"
        />
    {/* Main container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-4 md:gap-6 lg:gap-8 ">
          {/* Box one */}
            <div className="flex flex-col items-center justify-center text-center">
              <p className="text-green-600 font-bold">CREATE</p>
              {/* img */}
              <div className="flex-1">

             <Lottie animationData={createAnime} loop={true}></Lottie>
              </div>
              <h2 className="text-xl md:text-2xl font-bold">Question creation</h2>
              <p className=" text-lg text-gray-600">Effortlessly craft professional and attractive surveys, forms, and questionnaires to meet any requirement.</p>
            </div>
          {/* Box Two */}
            <div className="flex flex-col items-center justify-center text-center">
              <p className="text-green-600 font-bold">SHARE</p>
              {/* img */}
             <div className="flex-1">
             <Lottie animationData={shareAnime} loop={true}></Lottie>
             </div>
              <h2 className="text-xl md:text-2xl font-bold">Survey distribution</h2>
              <p className=" text-lg text-gray-600">Efficiently gather feedback via web links, embedded forms, emails, social media, and other channels.</p>
            </div>
          {/* Box three */}
            <div className="flex flex-col items-center justify-center text-center">
              <p className="text-green-600 font-bold">ANALYSE</p>
              <div className="flex-1">
             <Lottie animationData={analyseAnime} loop={true}></Lottie>
             </div>
              <h2 className="text-xl md:text-2xl font-bold">Live results</h2>
              <p className=" text-lg text-gray-600">Instantly access critical data insights with our powerful and comprehensive analysis tools. Our result are accurate</p>
            </div>
            
        </div>
      </ContainerBig>
    </div>
  );
};
export default HowItWorks;
