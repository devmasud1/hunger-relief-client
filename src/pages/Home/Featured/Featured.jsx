import { useEffect, useState } from "react";
import FeaturedCard from "./FeaturedCard";
import { Link } from "react-router-dom";
import UseAxios from "../../../hooks/UseAxios/UseAxios";

const Featured = () => {
  const [featuredFood, setFeaturedFood] = useState([]);
  const axiosUrl = UseAxios();

  useEffect(() => {
    axiosUrl
      .get("/api/v1/foods")
      .then((data) => {
        const sortedData = data.data.sort((a, b) => b.food_quantity - a.food_quantity);
        setFeaturedFood(sortedData);
      });
  }, [axiosUrl]);

  return (
    <div className="w-11/12 mx-auto my-12 lg:my-20">
      <h1 className="text-center text-2xl font-bold lg:text-4xl mb-3">
        Featured Food
      </h1>
      <hr className="w-28 lg:w-40 h-1 bg-red-900 m-auto" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 my-12">
        {featuredFood?.slice(0, 6).map((food, idx) => (
          <FeaturedCard key={idx} food={food}></FeaturedCard>
        ))}
      </div>
      <div className="m-auto text-center">
        <Link to="/available-food">
          <button className="btn btn-neutral rounded-tl-2xl rounded-br-2xl">
            Show All
          </button>
        </Link>
      </div>
    </div>
  );
};
export default Featured;
