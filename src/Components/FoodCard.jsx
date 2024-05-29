/** @format */

import Swal from "sweetalert2";
import useAuth from "../Hook/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../Hook/useAxiosSecure";
import useCarts from "../Hook/useCarts";

const FoodCard = ({ item }) => {
  const {name, image, price} = item;
  const { user } = useAuth();
  const location = useLocation()
  const navigate = useNavigate()
  const axiosSecure = useAxiosSecure()
  const [, refetch] = useCarts()

  const handleAddItem = (foodItem) => {
    if (user && user?.email) {
      const foodItem = {
        manuId : item._id,
        email: user?.email,
        name,
        image,
        price
      }
      axiosSecure.post('/carts', foodItem)
      .then(res => {
        console.log(res.data);
        if(res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
          });
          // refecth here
         
        }
        refetch()
      })
      
      console.log("object");
    } else {
      Swal.fire({
        title: "You are not login",
        text: "please login to add cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', {state: {from: location}})
        }
      });
    }
    console.log(foodItem);
  };
  return (
    <div className="p-2 border-slate-300 rounded-lg border-2">
      <figure>
        <img
          className="rounded-lg"
          src={item.image}
          alt="image"
        />
      </figure>
      <div className="">
        <h2 className="text-xl font-semibold my-2">{item.name}</h2>
        <p>{item.recipe}</p>
        <div className="card-actions">
          <button
            onClick={() => handleAddItem(item)}
            className="py-2 px-5 bg-red-700 mt-2 text-white font-semibold rounded">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
