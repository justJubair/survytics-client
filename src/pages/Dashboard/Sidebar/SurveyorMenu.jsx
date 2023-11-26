import { NavLink } from "react-router-dom";
import { GrChapterAdd } from "react-icons/gr";
const SurveyorMenu = () => {
  return (
    <>
      <ul className="font-semibold flex flex-col bg-gradient-to-r from-cyan-600 to-[#24962a] gap-4">
        <li className="w-full hover:text-white">
          <NavLink
            to="/dashboard/addSurvey"
            className={({ isActive }) =>
            `flex items-center px-4 py-2 mt-5 gap-2  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
              isActive ? 'bg-gradient-to-r from-cyan-700 to-cyan-600  text-white' : 'text-gray-600'
            }`
          }
          >
            <GrChapterAdd/>
            Add Survey
          </NavLink>
        </li>
        <li className="hover:text-white">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? " px-4 text-white rounded" : "px-4"
            }
          >
            Add Survey
          </NavLink>
        </li>
        <li className="hover:text-white">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "px-4 text-white rounded" : "px-4"
            }
          >
            Add Survey
          </NavLink>
        </li>
      </ul>
    </>
  );
};
export default SurveyorMenu;
