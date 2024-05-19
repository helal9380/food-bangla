/** @format */

import SectionTitle from "./SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);
  console.log(reviews);
  return (
    <div className="my-20 max-w-screen-md mx-auto">
      <SectionTitle
        heading={"---What Our Clients Say---"}
        subHeading={"TESTIMONIALS"}></SectionTitle>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper mt-5">
        {reviews?.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="px-10 flex flex-col items-center justify-center space-y-2 text-center">
              <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              />
              <p>{review.details}</p>
              <h3 className="text-orange-500 font-semibold text-xl">{review.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Review;
