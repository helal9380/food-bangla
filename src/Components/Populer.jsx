/** @format */

import { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";
import useMenu from "../Hook/useMenu";

const Populer = () => {
  const [populer] = useMenu();
  const filter = populer.filter(item => item.category === 'popular')
  
  return (
    <div className="my-10 px-10">
      <SectionTitle
        heading={"---Check it out---"}
        subHeading={"FROM OUR MENU"}></SectionTitle>
      <div className="grid grid-cols-1 mt-5 md:grid-cols-2 gap-3">
        {
            filter.map(item => (
                <div key={item._id}>
                    <div className="flex gap-5">
                        <img style={{borderRadius: '0 100% 100% 100%'}} className="w-[100px]" src={item.image} alt="" />
                        <div>
                        <h3 className="font-semibold my-2 text-xl">{item.name}</h3>
                        <h4>{item.recipe}</h4>
                        </div>
                        <h5 className="text-orange-500">Price {item.price}</h5>
                    </div>
                </div>
            ))
        }
      </div>
     <div className="flex justify-center items-center my-5">
     <button className="py-2 px-5 rounded bg-red-500 text-white">View Full  Menu</button>
     </div>
    </div>
  );
};

export default Populer;
