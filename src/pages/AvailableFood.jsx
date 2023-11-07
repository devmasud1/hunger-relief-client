import { useEffect, useState } from "react";
import AvailableFoodCard from "./AvailableFoodCard";
import UseAxios from "../hooks/UseAxios/UseAxios";
import LoadingSpinner from "./LoadingSpinner";

const AvailableFood = () => {
  const [availableFood, setAvailableFood] = useState([]);
  const [sortingOrder, setSortingOrder] = useState("asc");
  const [sortedFood, setSortedFood] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredFood, setFilteredFood] = useState([]);
  const axiosUrl = UseAxios();

  useEffect(() => {
    axiosUrl.get("/api/v1/foods").then((data) => {
      setAvailableFood(data.data);
    });
  }, [axiosUrl]);

  const handleSearch = (e) => {
    e.preventDefault();

    const foodName = e.target.food.value;

    setSearchQuery(foodName);

    e.target.food.value = "";
  };

  useEffect(() => {
    const filteredFoodData = availableFood.filter((food) =>
      food.food_name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setFilteredFood(filteredFoodData);
  }, [availableFood, searchQuery]);

  const handleSortByExpirationDate = () => {
    const foodCopy = [...availableFood];

    foodCopy.sort((a, b) => {
      const dateA = new Date(a.expired_date);
      const dateB = new Date(b.expired_date);

      if (sortingOrder === "asc") {
        return dateA - dateB;
      } else {
        return dateB - dateA;
      }
    });

    const newSortingOrder = sortingOrder === "asc" ? "desc" : "asc";

    setSortingOrder(newSortingOrder);
    setSortedFood(foodCopy);
  };

  return (
    <div>
      <div
        className="hero h-[30vh]"
        style={{
          backgroundImage: "url(https://i.ibb.co/HxQDQhn/bg.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-80"></div>
        <div className="hero-content text-center text-neutral-content">
          <div>
            <form onSubmit={handleSearch} className="flex items-center">
              <div className="form-control">
                <input
                  type="text"
                  name="food"
                  placeholder="Enter food name"
                  className="input input-bordered text-black rounded"
                  required
                />
              </div>
              <div className="form-control ml-3">
                <input
                  type="submit"
                  value="Search"
                  className="px-4 py-2 bg-slate-800 border-2 border-white cursor-pointer"
                />
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="w-11/12 mx-auto">
        <div className="card-actions flex-col justify-end pt-6">
          <label className="text-xl font-semibold">Sort The Food :</label>
          <button
            className="btn btn-accent px-8"
            onClick={handleSortByExpirationDate}
          >
            By Expire Date
          </button>
        </div>

        <div className="min-h-[30vh]">
          {availableFood.length > 0 ? (
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 my-10 ">
              {(searchQuery !== ""
                ? filteredFood
                : sortedFood.length > 0
                ? sortedFood
                : availableFood
              ).map((food, idx) => (
                <AvailableFoodCard key={idx} food={food}></AvailableFoodCard>
              ))}
            </div>
          ) : (
            <LoadingSpinner />
          )}
        </div>
      </div>
    </div>
  );
};
export default AvailableFood;
