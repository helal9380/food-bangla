/** @format */

const FoodCard = ({ item }) => {
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
          <button className="py-2 px-5 bg-red-700 mt-2 text-white font-semibold rounded">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
