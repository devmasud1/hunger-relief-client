import { Link } from "react-router-dom";

const FeaturedCard = ({ food }) => {
  const {
    food_image,
    food_name,
    donator,
    food_quantity,
    pickup_location,
    expired_date,
    additional_notes,
    donator_image,
    donar_name
  } = food || {};

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <div className="lg:w-1/2">
        <figure>
          <img src={food_image} alt="food_image" />
        </figure>
      </div>
      <div className="w-full lg:w-1/2">
        <div className="card-body">
          <div>
            <h2 className="card-title">{food_name}</h2>
            <p>{additional_notes}</p>
            <p>Quantity: {food_quantity}</p>
            <p>Expire date: {expired_date}</p>
            <div className="flex justify-between mt-8 items-center">
              <div className="w-1/2 lg:w-1/2">
                <div className="avatar">
                  <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img
                      src={donator?.donator_image || donator_image}
                      className="object-cover"
                    />
                  </div>
                </div>
                <h2 className="text-lg font-medium mt-3">
                  {donator?.donator_name || donar_name}
                </h2>
              </div>
              <div className="w-1/2 lg:w-1/2">
                <p>{pickup_location?.address || pickup_location}</p>
                <p>{pickup_location?.hometown}</p>
                <Link to={`/food/${food._id}`}>
                  <button className="btn btn-info mt-5 rounded-tl-2xl rounded-br-2xl">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
