import BistroBoss from "../../Components/BistroBoss";
import CallUs from "../../Components/CallUs";
import Check from "../../Components/Check";
import ChefRecomend from "../../Components/ChefRecomend";
import Populer from "../../Components/Populer";
import Review from "../../Components/Review";
import Slider from "../../Components/Slider/Slider";
import Category from "./Category";


const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Category></Category>
            <BistroBoss></BistroBoss>
            <Populer></Populer>
            <CallUs></CallUs>
            <ChefRecomend></ChefRecomend>
            <Check></Check>
            <Review></Review>
        </div>
    );
};

export default Home;