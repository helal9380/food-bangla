/** @format */

import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/Register/Register";
import Menu from "../pages/Menu/Menu";
import Order from "../Components/Order";
import Deshboard from "../layout/Deshboard";
import Cart from "../layout/Cart";
import PrivateRout from "./PrivateRout";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path: "/order/:category",
        element: <Order></Order>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "deshboard",
    element: (
      <PrivateRout>
        <Deshboard></Deshboard>
      </PrivateRout>
    ),
    children: [
      {
        path: "cart",
        element: <Cart></Cart>,
      },
      {
        path: 'users',
        element: <AllUsers></AllUsers>
      }
    ],
  },
]);
export default router;
