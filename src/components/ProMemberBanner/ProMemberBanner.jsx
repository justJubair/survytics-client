import Lottie from "lottie-react";
import moneyAnime from "../../assets/animations/money.json";
const ProMemberBanner = () => {
  return (
    <div className="flex flex-col-reverse items-center justify-center md:flex-row px-4">
      {/* text content */}
      <div className="mt-32 w-full md:w-1/2 lg:w-1/3 md:mt-0">
        <h1 className="text-2xl md:text-4xl font-bold">Elevate Your Survey Experience with <span className="text-green-600">Pro Memberships for $25</span></h1>
      </div>
      {/* animation */}
      <div className="hidden md:block">
        <Lottie className="w-60" animationData={moneyAnime} loop={true} />
      </div>
    </div>
  );
};
export default ProMemberBanner;
