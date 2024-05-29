/** @format */

import { FiDelete } from "react-icons/fi";
import useCarts from "../Hook/useCarts";
import Swal from "sweetalert2";
import useAxiosSecure from "../Hook/useAxiosSecure";

const Cart = () => {
  const [cart, refetch] = useCarts();
  const axiosSecure = useAxiosSecure();
  const totalPrice = cart.reduce(
    (prePrice, nextPrice) => prePrice + nextPrice.price,
    0
  );

  const handlDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/carts/${id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
                refetch()
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          })
          .catch((err) => {
            console.log(err);
          });

        //
      }
    });
  };
  return (
    <div>
      <div className="flex justify-evenly items-center">
        <h2 className="text-xl font-semibold">All foods : {cart.length}</h2>
        <h2 className="text-xl font-semibold">Total Price : {totalPrice}</h2>
        <button className="btn btn-outline">Pay Now</button>
      </div>
      <div>
        {/* cart show all here */}
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>No..</th>
                <th>Image</th>
                <th>food name</th>
                <th>Price</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {cart.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <th>
                    <button
                      onClick={() => handlDelete(item._id)}
                      className="btn btn-ghost text-red-600 btn-md">
                      <FiDelete></FiDelete>
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
