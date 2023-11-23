import Lottie from "lottie-react";
import bannerImg from "../../assets/images/banner.jpg"
import bannerAnime2 from "../../assets/animations/bannerAnime2.json"
import Button from "../Button/Button";
const Banner = () => {
    return(
        <div>
           <img className="object-cover w-full h-screen" src={bannerImg} alt="" />
           {/* overlay */}
           <div className="absolute w-full top-0 left-0 bg-green-800/90 h-screen"></div>
           <div className=" absolute flex items-start justify-center px-4 bottom-20 lg:px-0">
            {/* text content */}
            <div className="w-1/2 text-white">
                <h1 className="text-6xl font-extrabold leading-tight">A simple and powerful online survey tool</h1>
                <h3 className="text-2xl text-base-300 mb-4">Create FREE online surveys with unlimited questions and responses!</h3>
                {/* <button className="btn bg-green-600 border-none text-white hover:bg-green-800">Explore</button> */}
                <Button label="Explore"/>
            </div>
            {/* animation */}
            <div>
                <Lottie className="w-[450px]" animationData={bannerAnime2} loop={true} />
            </div>
           </div>
        </div>
    )}
export default Banner;