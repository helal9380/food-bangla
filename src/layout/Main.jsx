import { Outlet } from "react-router-dom";
import Navber from "../shared/Navber";
import Footer from "../pages/Footer/Footer";


const Main = () => {
    return (
        <div className="">
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;