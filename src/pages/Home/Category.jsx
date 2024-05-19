/** @format */

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import img1 from "../../assets/home/slide1.jpg";
import img2 from "../../assets/home/slide2.jpg";
import img3 from "../../assets/home/slide3.jpg";
import img4 from "../../assets/home/slide4.jpg";
import img5 from "../../assets/home/slide5.jpg";
import SectionTitle from "../../Components/SectionTitle";


const Category = () => {
  return (
    <div className="max-w-screen-lg mx-auto mt-16">
        <div>
            <SectionTitle heading={'---From 11:00am to 10:00pm---'} subHeading={'ORDER ONLINE'}></SectionTitle>
        </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper my-10">
        <SwiperSlide>
          <img
            src={img1}
            alt=""
          />
          <h3 className="-mt-24 text-2xl  font-semibold text-center">Salads</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img2}
            alt=""
          />
          <h3 className="-mt-24 text-2xl  font-semibold text-center">Soups</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img3}
            alt=""
          />
          <h3 className="-mt-24 text-2xl  font-semibold text-center">pizzas</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img4}
            alt=""
          />
          <h3 className="-mt-24 text-2xl  font-semibold text-center">desserts</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img5}
            alt=""
          />
          <h3 className="-mt-24 text-2xl  font-semibold text-center">desserts</h3>
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default Category;
