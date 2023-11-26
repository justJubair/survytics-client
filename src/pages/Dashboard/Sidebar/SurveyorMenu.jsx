import { NavLink } from "react-router-dom";

const SurveyorMenu = () => {
  return (
    <>
      <ul className="font-semibold flex flex-col bg-gradient-to-r from-cyan-600 to-[#24962a] gap-4">
        <li className="w-full hover:text-white">
          <NavLink
            to="/dashboard/addSurvey"
            className={({ isActive }) =>
              isActive ? "px-4 text-white rounded" : "px-4"
            }
          >
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
