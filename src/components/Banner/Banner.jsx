import bannerImg from "../../assets/images/banner.jpg"
import bannerAnime2 from "../../assets/animations/bannerAnime.gif"
import { Link } from "react-router-dom";

const Banner = () => {
    return(
        <div>
           <img className="object-cover w-full h-screen" src={bannerImg} alt="" />
           {/* overlay */}
           <div className="absolute w-full top-0 left-0 bg-gradient-to-t from-green-800/60 to-green-700 h-screen"></div>
           <div className=" absolute flex flex-col-reverse items-center justify-center px-4 bottom-10  md:bottom-16 lg:bottom-20 md:flex-row lg:px-0">
            {/* text content */}
            <div className=" md:w-1/2 text-white space-y-4">
                <h1 className="text-2xl md:text-4xl lg:text-6xl font-extrabold leading-tight">A simple and powerful online survey tool</h1>
                <h3 className="text-sm md:text-2xl text-base-300  animate-pulse">Create FREE online surveys with unlimited questions and responses!</h3>
                <button className="btn bg-gradient-to-r from-cyan-600 to-[#24962a] border-none text-white hover:bg-white hover:scale-x-110"><Link to="/surveys">Explore</Link></button>
                
            </div>
            {/* animation */}
            <div>
               <img className="w-64 md:w-96 lg:w-[450px]" src={bannerAnime2} alt="" />
            </div>
           </div>
        </div>
    )}
export default Banner;