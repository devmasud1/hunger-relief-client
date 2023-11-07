import { useContext } from "react";
import { AuthContext } from "../hooks/Provider/AuthProvider";
import UseAxios from "../hooks/UseAxios/UseAxios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const FoodDetailsModal = ({ food }) => {
  const axiosUrl = UseAxios();

  const getCurrentDate = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
    const day = currentDate.getDate().toString().padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

  const { user } = useContext(AuthContext);

  const donarEmail = user?.email;
  const userEmail = user?.email;

  const handleRequestSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const food_name = form.food_name.value;
    const food_image = form.food_image.value;
    const food_id = form._id.value;
    const donar_email = form.donar_email.value;
    const donar_name = form.donar_name.value;
    const user_email = form.user_email.value;
    const request_date = form.request_date.value;
    const pickup_location = form.pickup_location.value;
    const expired_date = form.expired_date.value;
    const additional_notes = form.additional_notes.value;
    const donation_money = form.donation_money.value;

    const foodRequest = {
      food_name,
      food_image,
      food_id,
      donar_email,
      donar_name,
      user_email,
      request_date,
      pickup_location,
      expired_date,
      additional_notes,
      donation_money,
    };

    axiosUrl.post("/api/v1/food-request", foodRequest).then((res) => {
      if (res.data.insertedId) {
        toast("successfully request sent", { type: "success" });     
      }
    });
  };
  return (
    <dialog id="my_modal_3" className="modal">
      <ToastContainer />
      <div className="modal-box">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <div>
          <div className="bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleRequestSubmit} className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Food Image</span>
                    </label>
                    <input
                      type="text"
                      name="food_image"
                      readOnly
                      defaultValue={food.food_image}
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Food Name</span>
                    </label>
                    <input
                      type="text"
                      name="food_name"
                      readOnly
                      defaultValue={food.food_name}
                      className="input input-bordered"
                      required
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Food ID</span>
                    </label>
                    <input
                      type="text"
                      name="_id"
                      readOnly
                      defaultValue={food._id}
                      className="input input-bordered"
                      required
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Food Donator</span>
                    </label>
                    <input
                      type="text"
                      name="donar_email"
                      readOnly
                      defaultValue={donarEmail}
                      className="input input-bordered"
                      required
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Donator Name</span>
                    </label>
                    <input
                      type="text"
                      name="donar_name"
                      readOnly
                      defaultValue={food?.donar_name ||food?.donator.donator_name}
                      className="input input-bordered"
                      required
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">User Email</span>
                    </label>
                    <input
                      type="text"
                      name="user_email"
                      readOnly
                      defaultValue={userEmail}
                      className="input input-bordered"
                      required
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Request Date</span>
                    </label>
                    <input
                      type="text"
                      name="request_date"
                      readOnly
                      defaultValue={getCurrentDate()}
                      className="input input-bordered"
                      required
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Pickup Location</span>
                    </label>
                    <input
                      type="text"
                      name="pickup_location"
                      readOnly
                      defaultValue={food?.pickup_location.address || food?.pickup_location}
                      className="input input-bordered"
                      required
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Expire Date</span>
                    </label>
                    <input
                      type="text"
                      name="expired_date"
                      readOnly
                      defaultValue={food.expired_date}
                      className="input input-bordered"
                      required
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Additional Notes</span>
                    </label>
                    <input
                      type="text"
                      name="additional_notes"
                      defaultValue={food.additional_notes}
                      className="input input-bordered"
                      required
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Donation Money</span>
                    </label>
                    <input
                      type="text"
                      name="donation_money"
                      defaultValue="10"
                      className="input input-bordered"
                      required
                    />
                  </div>

                  <div className="form-control mt-6">
                    <input
                      className="btn btn-neutral"
                      type="submit"
                      value="Request"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
};
export default FoodDetailsModal;
