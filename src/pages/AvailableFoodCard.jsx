import { Link } from "react-router-dom";

const AvailableFoodCard = ({ food }) => {
  const {
    food_image,
    food_name,
    donator,
    food_quantity,
    pickup_location,
    expired_date,
    additional_notes,
  } = food || {};

  return (
    <div className="card lg:flex-col lg:card-side bg-base-100 shadow-xl">
      <div className="w-full">
        <figure>
          <img
            src={food_image}
            alt="food_image"
            className="w-full h-[300px] object-cover"
          />
        </figure>
      </div>
      <div className="w-full">
        <div className="card-body">
          <div>
            <h2 className="card-title">{food_name}</h2>
            <p>{additional_notes}</p>
            <p>Quantity: {food_quantity}</p>
            <p>Expire date: {expired_date}</p>
            <div className="flex justify-between mt-8 items-center">
              <div className="w-1/2">
                <div className="avatar">
                  <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={donator.donator_image} className="object-cover" />
                  </div>
                </div>
                <h2 className="text-base lg:text-lg font-medium mt-3">
                  {donator.donator_name}
                </h2>
              </div>
              <div className="w-1/2">
                <h1 className="text-lg font-medium">Pickup location:</h1>
                <h2 className="text-sm">{pickup_location.address}</h2>

                <div className="card-actions justify-end mt-5">
                  <Link to={`/food/${food._id}`}>
                    <button className="btn btn-neutral">View Details</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AvailableFoodCard;
