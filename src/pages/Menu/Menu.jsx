/** @format */

import Cover from "../../Components/Cover";
import MenuCategory from "../../Components/MenuCategory";
import SectionTitle from "../../Components/SectionTitle";
import useMenu from "../../Hook/useMenu";

import coverImg from "../../assets/menu/banner3.jpg";
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import dessartImg from '../../assets/menu/dessert-bg.jpeg'

const Menu = () => {
  const [menus] = useMenu();
  const dessart = menus.filter((item) => item.category === "dessert");
  const pizza = menus.filter((item) => item.category === "pizza");
  const salad = menus.filter((item) => item.category === "salad");
  const offered = menus.filter((item) => item.category === "offered");
  const soup = menus.filter((item) => item.category === "soup");
  console.log(offered);
  return (
    <div>
        <Cover img={coverImg} title={'Our menu'}></Cover>
      <SectionTitle
        heading="---Don't miss---"
        subHeading="TODAY'S OFFER">
        {" "}
      </SectionTitle>
      <MenuCategory
      title={'Our Menu'}
        items={offered}
        ></MenuCategory>
        {/* our dessarts */}
        <MenuCategory items={dessart} coverimg={dessartImg} title={'dessarts'}></MenuCategory>
        <MenuCategory items={pizza} coverimg={pizzaImg} title={'pizza'}></MenuCategory>
        <MenuCategory items={soup} coverimg={saladImg} title={'soup'}></MenuCategory>
        <MenuCategory items={salad} coverimg={soupImg} title={'salad'}></MenuCategory>
    </div>
  );
};

export default Menu;
