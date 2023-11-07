import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../hooks/Provider/AuthProvider";
import UseAxios from "../hooks/UseAxios/UseAxios";
import { useNavigate, useParams } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ManageSingleFoodTable from "./ManageSingleFoodTable";

const ManageSingleFood = () => {
  const params = useParams();
  const ownerName = params.id;

  const [manageFood, setManageFood] = useState([]);
  const { user } = useContext(AuthContext);
  const axiosUrl = UseAxios();

  useEffect(() => {
    const url = `/api/v1/food-request?email=${user?.email}`;
    axiosUrl.get(url).then((data) => {
      const filteredData = data.data.filter(
        (item) => item.donar_name === ownerName
      );
      setManageFood(filteredData);
    });
  }, [axiosUrl, ownerName, user]);

  const updateUrl = "/api/v1/food-request";
  const handleRequestConfirm = (id) => {
    axiosUrl
      .patch(`${updateUrl}/${id}`, { status: "delivered" })
      .then((data) => {
        if (data.data.modifiedCount > 0) {
          const remaining = manageFood.filter((item) => item._id !== id);
          const updated = manageFood.find((item) => item._id === id);
          updated.status = "delivered";
          const newRequest = [updated, ...remaining];
          setManageFood(newRequest);
          toast("status update", { type: "success" });
        }
      });
  };

  const goTo = useNavigate();
  const prePage = () => {
    goTo("/manage-foods");
  };

  return (
    <div className="w-11/12 mx-auto min-h-[60vh] my-12 lg:16">
      <ToastContainer />
      <div className=" mb-5">
        <button className="btn btn-neutral" onClick={prePage}>
          back to previous page
        </button>
      </div>
      <div className="overflow-x-auto w-full">
        {manageFood.length > 0 ? (
          <table className="table w-full">
            <thead>
              <tr>
                <th>Requester Image </th>
                <th>Requester Name </th>
                <th>Request Date</th>
                <th>Requester Email</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {manageFood?.map((data) => (
                <ManageSingleFoodTable
                  key={data._id}
                  data={data}
                  handleRequestConfirm={handleRequestConfirm}
                ></ManageSingleFoodTable>
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

export default ManageSingleFood;
