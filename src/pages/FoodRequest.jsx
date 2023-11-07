import { useContext, useEffect, useState } from "react";
import UseAxios from "../hooks/UseAxios/UseAxios";
import { AuthContext } from "./../hooks/Provider/AuthProvider";
import FoodRequestTable from "./FoodRequestTable";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingSpinner from "./LoadingSpinner";

const FoodRequest = () => {
  const [foodRequest, setFoodRequest] = useState([]);
  const { user } = useContext(AuthContext);
  const axiosUrl = UseAxios();

  const url = `/api/v1/food-request?email=${user?.email}`;
  useEffect(() => {
    axiosUrl.get(url).then((data) => setFoodRequest(data.data));
  }, [axiosUrl, url]);

  const deleteUrl = "/api/v1/food-request";
  const handleRequestDelete = (id, status) => {
    if (status === "available") {
      axiosUrl
        .delete(`${deleteUrl}/${id}`)
        .then((res) => {
          if (res.data.deletedCount > 0) {
            const remaining = foodRequest.filter((item) => item._id !== id);
            setFoodRequest(remaining);
            toast("Your request has been removed", { type: "success" });
          }
        })
        .catch(() => {
          toast("Error:", { type: "error" });
        });
    } else {
      toast("This item already delivered", { type: "error" });
    }
  };

  const updateUrl = "/api/v1/food-request";
  const handleRequestConfirm = (id) => {
    axiosUrl
      .patch(`${updateUrl}/${id}`, { status: "delivered" })
      .then((data) => {
        if (data.data.modifiedCount > 0) {
          const remaining = foodRequest.filter((item) => item._id !== id);
          const updated = foodRequest.find((item) => item._id === id);
          updated.status = "delivered";
          const newRequest = [updated, ...remaining];
          setFoodRequest(newRequest);
          toast("status update", { type: "success" });
        }
      });
  };

  return (
    <div className="w-11/12 mx-auto min-h-[70vh] my-10">
      <ToastContainer />
      <h2 className="text-3xl">Your request: {foodRequest.length}</h2>
      <div className="overflow-x-auto w-full">
        {foodRequest.length > 0 ? (
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
        ) : (
          <LoadingSpinner />
        )}
      </div>
    </div>
  );
};
export default FoodRequest;
