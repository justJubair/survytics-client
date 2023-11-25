import Lottie from "lottie-react";
import loadingAnime from "../../assets/animations/loading2.json"
const Loader = () => {
    return(
        <div className="h-screen flex items-center justify-center">
            <Lottie className="w-56" animationData={loadingAnime} loop={true}/>
        </div>
    )}
export default Loader;