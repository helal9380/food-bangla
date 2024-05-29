/** @format */

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Cover from "./Cover";
import coverImg from "../assets/shop/banner2.jpg";
import useMenu from "../Hook/useMenu";
import FoodCard from "./FoodCard";
import { useState } from "react";
import { useParams } from "react-router-dom";

const Order = () => {
    const categories = ['pizza', 'dessart', 'salad', 'soup', 'offered', 'drinks']
    const {category} = useParams();
    const initializeIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initializeIndex);
    const [menus] = useMenu();
    const dessart = menus.filter((item) => item.category === "dessert");
    const pizza = menus.filter((item) => item.category === "pizza");
    const salad = menus.filter((item) => item.category === "salad");
    const offered = menus.filter((item) => item.category === "offered");
    const soup = menus.filter((item) => item.category === "soup");
    const drink = menus.filter((item) => item.category === "drinks");
   
    console.log(category);
  return (
    <div>
      <Cover
        img={coverImg}
        title={"Order Now"}></Cover>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)} className="mt-10 max-w-screen-lg mx-auto">
        <TabList>
          <Tab>PIZZA</Tab>
          <Tab>DESSART</Tab>
          <Tab>SALAD</Tab>
          <Tab>SOUP</Tab>
          <Tab>OFFERED</Tab>
          <Tab>DRINK</Tab>
        </TabList>

        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {
                pizza.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
            }
          </div>
        </TabPanel>
        <TabPanel>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {
                dessart.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
            }
          </div>
        </TabPanel>
        <TabPanel>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {
                salad.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
            }
          </div>
        </TabPanel>
        <TabPanel>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {
                soup.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
            }
          </div>
        </TabPanel>
        <TabPanel>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {
                offered.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
            }
          </div>
        </TabPanel>
        <TabPanel>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {
                drink.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
            }
          </div>
        </TabPanel>
      
      </Tabs>
    </div>
  );
};

export default Order;
