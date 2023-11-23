import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
const Navbar = () => {
  const navLinks = (
    <>
      <li className="hover:text-green-600">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "bg-green-500 px-4  py-2  text-white rounded"
              : "px-4 py-2"
          }
        >
          Home
        </NavLink>
      </li>
      <li className=" hover:text-green-600">
        <NavLink
          to="/surveys"
          className={({ isActive }) =>
            isActive ? "bg-green-500 px-4 py-2 text-white rounded" : "px-4 py-2"
          }
        >
          Surveys
        </NavLink>
      </li>
      <li className=" hover:text-green-500">
        <NavLink
          to="/proMember"
          className={({ isActive }) =>
            isActive
              ? "bg-green-500 px-4 py-2  text-white rounded"
              : "px-4 py-2"
          }
        >
          Pro member
        </NavLink>
      </li>
      <li className=" hover:text-green-500">
        <NavLink
          to="/aboutUs"
          className={({ isActive }) =>
            isActive
              ? "bg-green-500 px-4 py-2  text-white rounded"
              : "px-4 py-2"
          }
        >
          About Us
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="w-full z-[100] bg-transparent absolute">
      <div className="max-w-screen-xl py-4 mx-auto flex items-center justify-between">
        <div>
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu font-semibold space-y-3 pl-4 dropdown-content my-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
            <img
              className="hidden w-36 rounded px-4 py-2 bg-green-600 lg:block shadow-xl"
              src={logo}
              alt="logo"
            />
          </div>
        </div>
        <div className="flex items-center pr-4 lg:pr-0">
          <div className=" hidden lg:flex">
            <ul className="flex  font-semibold">{navLinks}</ul>
          </div>
          <div className="border-l-2 pl-6">
            <a className="btn">Button</a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
