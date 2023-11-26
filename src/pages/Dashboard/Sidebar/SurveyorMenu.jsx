import { NavLink } from "react-router-dom";

const SurveyorMenu = () => {
   
    return(
        <>
        <ul className="font-semibold flex flex-col p-7  bg-gradient-to-r from-cyan-600 to-[#24962a] gap-4 min-h-screen">
        <li className="hover:text-white">
            <NavLink
              to="/dashboard/addSurvey"
              className={({ isActive }) =>
                isActive
                  ? "bg-gradient-to-r from-cyan-600 to-[#24962a] px-4  py-2  text-white rounded"
                  : "px-4 py-2"
              }
            >
              Add Survey
            </NavLink>
          </li>
        <li className="hover:text-white">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "bg-gradient-to-r from-cyan-600 to-[#24962a] px-4  py-2  text-white rounded"
                  : "px-4 py-2"
              }
            >
              Add Survey
            </NavLink>
          </li>
        <li className="hover:text-white">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "bg-gradient-to-r from-cyan-600 to-[#24962a] px-4  py-2  text-white rounded"
                  : "px-4 py-2"
              }
            >
              Add Survey
            </NavLink>
          </li>
      
        </ul>
        </>
    )}
export default SurveyorMenu;