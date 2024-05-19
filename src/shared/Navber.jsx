/** @format */

import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) => {
          return isActive ? 'bg-white text-[16px] py-2 px-5 text-black font-semibold' : 'font-semibold py-2 px-5 text-[16px] ';
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/menu"
        className={({ isActive }) => {
          return isActive ? 'bg-white text-[16px] py-2 px-5 text-black font-semibold' : 'font-semibold py-2 px-5 text-[16px] ';
        }}
      >
        Menu
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive }) => {
          return isActive ? 'bg-white text-[16px] py-2 px-5 text-black font-semibold' : 'font-semibold py-2 px-5 text-[16px] ';
        }}
      >
        Login
      </NavLink>
      <NavLink
        to="/register"
        className={({ isActive }) => {
          return isActive ? 'bg-white text-[16px] py-2 px-5 text-black font-semibold' : 'font-semibold py-2 px-5 text-[16px] ';
        }}
      >
        Register
      </NavLink>
    </>
  );

  return (
    <div className="navbar fixed z-10 text-white bg-black opacity-80">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <a className="text-white text-2xl font-semibold">Course</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <Link to={'/login'}>Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
