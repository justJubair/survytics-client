import { useState } from "react";
import { GrLogout } from "react-icons/gr";
import { AiOutlineBars } from "react-icons/ai";
import logo from "../../../assets/images/logo.png";
import SurveyorMenu from "./SurveyorMenu";
import { Link } from "react-router-dom";
import useRole from "../../../hooks/useRole";
import useAuth from "../../../hooks/useAuth";
import Loader from "../../../shared/Loader/Loader";

const Sidebar = () => {
  const [isActive, setActive] = useState(false);
  const {user, loading} = useAuth()
  const [role, isLoading] = useRole(user?.email)
  console.log(role)
  const handleToggle = () => {
    setActive(!isActive);
  };
  if(loading || isLoading){
    return <Loader/>
  }
  return (
    <>
      {/* Small Screen Navbar */}
      <div className="bg-gray-100 text-gray-800 flex justify-between lg:hidden">
        <button
          onClick={handleToggle}
          className="z-20 p-4 focus:outline-none"
        >
          <AiOutlineBars className="h-5 w-5" />
        </button>
      </div>
      {/* Sidebar */}
      <div
        className={`z-10 bg-gradient-to-r from-cyan-600 to-[#24962a] lg:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 inset-y-0 absolute h-[1200px] md:h-[800px] lg:h-full left-0 transform ${
          isActive && "-translate-x-full"
        }  lg:translate-x-0   transition duration-200 ease-in-out `}
      >
        <div>
          <Link to="/" className="flex justify-center">
            <img className="w-32" src={logo} alt="logo" />
          </Link>

          {/* Nav Items */}
          <div className="flex flex-col justify-between flex-1 mt-6">
            <nav>
                <SurveyorMenu/>
            </nav>
          </div>
        </div>

        <div>
          <hr />
          <button className="flex w-full items-center px-4 py-2 mt-5 text-white    hover:text-gray-700 transition-colors duration-300 transform">
            <GrLogout className="w-5 h-5" />

            <span className="mx-4 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
