import { NavLink } from "react-router-dom";
import { GrChapterAdd } from "react-icons/gr";
import { RiListSettingsLine } from "react-icons/ri";
const SurveyorMenu = () => {
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
            <GrChapterAdd/>
            Add Survey
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
       
      </ul>
    </>
  );
};
export default SurveyorMenu;
