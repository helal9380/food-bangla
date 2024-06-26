/** @format */

import { CgProfile } from "react-icons/cg";
import { FaCartPlus, FaHome, FaList, FaShoppingCart, FaUser } from "react-icons/fa";
import { TbBrandBooking } from "react-icons/tb";
import { Link, NavLink, Outlet } from "react-router-dom";
import useCarts from "../Hook/useCarts";
import { FaSpoon } from "react-icons/fa6";
import { IoBook } from "react-icons/io5";
import useAdmin from "../Hook/useAdmin";

const Deshboard = () => {
  const [cart] = useCarts()
  const [isAdmin] = useAdmin();
  return (
    <div className="flex">
      <div className="w-64 p-10 bg-orange-400 min-h-screen font-semibold">
        <h2 className="text-xl font-semibold my-2">My Dashboard</h2>
        {
          isAdmin ? <>
          <ul className="space-y-5">
          <li className="flex items-center gap-2">
            <FaHome></FaHome>
            <NavLink to={"/deshboard/adminHome"}>ADMIN HOME</NavLink>
          </li>
          <li className="flex items-center gap-2">
            <FaSpoon></FaSpoon>
            <NavLink to={"/deshboard/cart"}>ADD ITEMS</NavLink>
          </li>
          <li className="flex items-center gap-2">
            <FaList></FaList>
            <NavLink to={"/deshboard/manageItems"}>MANAGE ITEMS</NavLink>
          </li>
          <li className="flex items-center gap-2">
            <IoBook></IoBook>
            <NavLink to={"/deshboard/booking"}>MANAGE BOOKING</NavLink>
          </li>
          <li className="flex items-center gap-2">
            <FaUser></FaUser>
            <NavLink to={"/deshboard/users"}>ALL USERS</NavLink>
          </li>
        </ul>
          </>
          : 
          <>
          <ul className="space-y-5">
          <li className="flex items-center gap-2">
            <FaShoppingCart></FaShoppingCart>
            <NavLink to={"/deshboard/cart"}>My Cart ({cart.length})</NavLink>
          </li>
          <li className="flex items-center gap-2">
            <FaCartPlus></FaCartPlus>
            <NavLink to={"/deshboard/cart"}>My add cart</NavLink>
          </li>
          <li className="flex items-center gap-2">
            <TbBrandBooking></TbBrandBooking>
            <NavLink to={"/deshboard/cart"}>My Booging</NavLink>
          </li>
          <li className="flex items-center gap-2">
            <CgProfile></CgProfile>
            <NavLink to={"/deshboard/cart"}>Profile</NavLink>
          </li>
        </ul>
          </>
        }
        {/* shared */}
        <div className="w-full h-[2px] bg-slate-500 my-5"></div>
        <ul className="space-y-5">
          <li className="flex items-center gap-2">
            <FaHome></FaHome>
          <Link to={'/'}>Home</Link>
          </li>
          <li className="flex items-center gap-2">
            <FaHome></FaHome>
          <Link to={'/menu'}>Menu</Link>
          </li>
          <li className="flex items-center gap-2">
            <FaHome></FaHome>
          <Link to={'/order/:category'}>Order</Link>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-10 bg-gray-200">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Deshboard;
