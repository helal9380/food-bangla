/** @format */

import { Link, NavLink } from "react-router-dom";
import useAuth from "../Hook/useAuth";
import useCarts from "../Hook/useCarts";

const Navbar = () => {
  const [cart] = useCarts();
  const { user, logOut } = useAuth();
  console.log(cart);
  const handleLogOut = () => {
    console.log("clicked");
    logOut().then(() => {
      console.log("logOut");
    });
  };
  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) => {
          return isActive
            ? "bg-white text-[16px] py-2 px-5 text-black font-semibold"
            : "font-semibold py-2 px-5 text-[16px] ";
        }}>
        Home
      </NavLink>
      <NavLink
        to="/menu"
        className={({ isActive }) => {
          return isActive
            ? "bg-white text-[16px] py-2 px-5 text-black font-semibold"
            : "font-semibold py-2 px-5 text-[16px] ";
        }}>
        Menu
      </NavLink>
      <NavLink
        to="/order/:category"
        className={({ isActive }) => {
          return isActive
            ? "bg-white text-[16px] py-2 px-5 text-black font-semibold"
            : "font-semibold py-2 px-5 text-[16px] ";
        }}>
        Order
      </NavLink>

      {user ? (
        <>
          <Link to={'/deshboard/cart'} className="btn">
            <div className="badge badge-secondary">+{cart.length}</div>
          </Link>
          <bottom
            onClick={handleLogOut}
            className=" cursor-pointer font-semibold py-2 px-5 text-[16px]">
            Log out
          </bottom>
        </>
      ) : (
        <NavLink
          to="/login"
          className={({ isActive }) => {
            return isActive
              ? "bg-white text-[16px] py-2 px-5 text-black font-semibold"
              : "font-semibold py-2 px-5 text-[16px] ";
          }}>
          Login
        </NavLink>
      )}
    </>
  );

  return (
    <div className="navbar fixed z-10 text-white bg-black opacity-80">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {links}
          </ul>
        </div>
        <a className="text-white text-2xl font-semibold">Course</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {/* profile */}
        {user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-gray-900 rounded-box w-52">
              <li>
                <a className="justify-between">Profile</a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        ) : (
          <bottom className="uppercase">Sign In</bottom>
        )}
      </div>
    </div>
  );
};

export default Navbar;
