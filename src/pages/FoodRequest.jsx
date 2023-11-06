import { useContext, useEffect, useState } from "react";
import UseAxios from "../hooks/UseAxios/UseAxios";
import { AuthContext } from "./../hooks/Provider/AuthProvider";
import FoodRequestTable from "./FoodRequestTable";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FoodRequest = () => {
  const [foodRequest, setFoodRequest] = useState([]);
  console.log(foodRequest);
  const { user } = useContext(AuthContext);
  const axiosUrl = UseAxios();

  const url = `/api/v1/food-request?email=${user?.email}`;

  useEffect(() => {
    axiosUrl.get(url).then((data) => setFoodRequest(data.data));
  }, [axiosUrl, url]);

  const deleteUrl = "/api/v1/food-request";
  const handleRequestDelete = (id) => {
    axiosUrl
      .delete(`${deleteUrl}/${id}`)
      .then((response) => {
        if (response.data.deletedCount > 0) {
          const remaining = foodRequest.filter((booking) => booking._id !== id);
          setFoodRequest(remaining);
          toast("Your request has been remove", { type: "success" });
        }
      })
      .catch(() => {
        toast("Error:", { type: "error" });
      });
  };

  const handleRequestConfirm = () => {};

  return (
    <div className="w-11/12 mx-auto min-h-[70vh] my-10">
      <ToastContainer />
      <h2 className="text-3xl">Your request: {foodRequest.length}</h2>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Donar Name</th>
              <th>Pickup Location</th>
              <th>Expire Date</th>
              <th>Request Date</th>
              <th>Your Donation Amount</th>
              <th>Status</th>
              <th>Cancel</th>
            </tr>
          </thead>
          <tbody>
            {foodRequest?.map((data) => (
              <FoodRequestTable
                key={data._id}
                data={data}
                handleRequestDelete={handleRequestDelete}
                handleRequestConfirm={handleRequestConfirm}
              ></FoodRequestTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default FoodRequest;
