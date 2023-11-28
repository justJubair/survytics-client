import { NavLink } from "react-router-dom";
import { FaUsersGear } from "react-icons/fa6";
import { RiListSettingsLine } from "react-icons/ri";
import { MdOutlineQuestionAnswer } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
const AdminMenu = () => {
  return (
    <>
      <ul className="font-semibold flex flex-col bg-gradient-to-r from-cyan-600 to-[#24962a] gap-2">
        <li className="w-full hover:text-white">
          <NavLink
            to="/dashboard/addSurvey"
            className={({ isActive }) =>
            `flex items-center px-4 py-2 mt-5 gap-2  transition-colors duration-300 transform   hover:text-gray-700 ${
              isActive ? 'bg-gradient-to-r from-cyan-700 to-cyan-600  text-white' : 'text-white'
            }`
          }
          >
            <FaUsersGear/>
           Manage Users
          </NavLink>
        </li>
        <li className="w-full hover:text-white">
          <NavLink
            to="/dashboard/manageSurveys"
            className={({ isActive }) =>
            `flex items-center px-4 py-2 gap-2  transition-colors duration-300 transform   hover:text-gray-700 ${
              isActive ? 'bg-gradient-to-r from-cyan-700 to-cyan-600  text-white' : 'text-white'
            }`
          }
          >
           <RiListSettingsLine/>
            Manage Surveys
          </NavLink>
        </li>

        <li className="w-full flex items-center px-4 py-2 gap-2 text-gray-200 mt-4">
          <MdOutlineQuestionAnswer/>
          Survey Responses
        </li>
        <li className="w-full hover:text-white">
          <NavLink
            to="/dashboard/responseTable"
            className={({ isActive }) =>
            `flex items-center px-4 py-2 gap-2  transition-colors duration-300 transform   hover:text-gray-700 ${
              isActive ? 'bg-gradient-to-r from-cyan-700 to-cyan-600  text-white' : 'text-white'
            }`
          }
          >
           <GoDotFill/>
           Table
          </NavLink>
        </li>
        <li className="w-full hover:text-white">
          <NavLink
            to="/dashboard/responseChart"
            className={({ isActive }) =>
            `flex items-center px-4 py-2 gap-2  transition-colors duration-300 transform   hover:text-gray-700 ${
              isActive ? 'bg-gradient-to-r from-cyan-700 to-cyan-600  text-white' : 'text-white'
            }`
          }
          >
           <GoDotFill/>
           Chart
          </NavLink>
        </li>
       
      </ul>
    </>
  );                  
};
export default AdminMenu;
