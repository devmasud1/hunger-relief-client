import { useEffect, useState } from "react";
import AvailableFoodCard from "./AvailableFoodCard";
import UseAxios from "../hooks/UseAxios/UseAxios";

const AvailableFood = () => {
  const [availableFood, setAvailableFood] = useState([]);
  const axiosUrl = UseAxios();

  useEffect(() => {
    axiosUrl.get("/api/v1/foods").then((data) => {
      setAvailableFood(data.data);
    });
  }, [axiosUrl]);

  const handleSearch = (e) => {
    e.preventDefault();

    const foodName = e.target.food.value;

    console.log(foodName);
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
        <div className="card-actions justify-end pt-6">
          <button className="btn btn-accent">sort by date</button>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 my-10 lg:my-14">
          {availableFood?.map((food, idx) => (
            <AvailableFoodCard key={idx} food={food}></AvailableFoodCard>
          ))}
        </div>
      </div>
    </div>
  );
};
export default AvailableFood;
