import { useLoaderData } from "react-router-dom";
import FoodDetailsModal from "./FoodDetailsModal";
import { useEffect, useState } from "react";
import LoadingSpinner from "./LoadingSpinner";
import { Helmet } from "react-helmet";

const FoodDetails = () => {
  const [isLoading, setIsLoading] = useState(true);
  const food = useLoaderData();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 200);
  }, []);

  return (
    <div className="w-full sm:w-11/12 mx-auto my-10 lg:my-14">
      <Helmet>
        <title>HR | Food Details</title>
      </Helmet>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="w-full sm:w-11/12 md:w-2/3 lg:w-1/2 mx-auto card bg-base-100 shadow-xl">
          <div className="flex flex-col sm:flex-row gap-4 items-center px-4 sm:px-10">
            <div className="avatar">
              <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={food.donator_image || food.donator.donator_image} alt="donator_image" />
              </div>
            </div>
            <div>
              <h2><strong>Donar:</strong> {food?.donar_name || food?.donator.donator_name} </h2>
              <p>
                <strong>Pickup Location:</strong>{" "}
                {food?.pickup_location.address || food.pickup_location}
              </p>
            </div>
          </div>
          <figure className="px-4 sm:px-10 pt-4 sm:pt-10">
            <img
              src={food.food_image}
              alt="food_image"
              className="w-full h-[300px] sm:h-[400px] object-cover"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Name: {food.food_name}</h2>
            <p>Quality: {food.food_quantity}</p>
            <p>Expired Date: {food.expired_date}</p>
            <div className="card-actions">
              <button
                className="btn btn-info"
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
              >
                Request
              </button>
            </div>
            <div>
              <FoodDetailsModal food={food} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FoodDetails;
