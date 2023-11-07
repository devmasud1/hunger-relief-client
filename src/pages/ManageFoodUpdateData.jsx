import { useLoaderData, useNavigate } from "react-router-dom";
import UseAxios from "../hooks/UseAxios/UseAxios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ManageFoodUpdateData = () => {
  const updatedFood = useLoaderData();

  const axiosUrl = UseAxios();

  const updateUrl = "/api/v1/food";

  const handleUpdateFood = (e) => {
    e.preventDefault();

    const form = e.target;

    const food_name = form.food_name.value;
    const food_image = form.food_image.value;
    const food_quantity = form.food_quantity.value;
    const donar_name = form.donar_name.value;
    const donator_email = form.donator_email.value;
    const donator_image = form.donator_image.value;
    const pickup_location = form.pickup_location.value;
    const expired_date = form.expired_date.value;
    const additional_notes = form.additional_notes.value;
    const food_status = form.food_status.value;

    const updateFood = {
      food_name,
      food_image,
      food_quantity,
      pickup_location,
      expired_date,
      additional_notes,
      donar_name,
      donator_email,
      donator_image,
      food_status,
    };

    axiosUrl.put(`${updateUrl}/${updatedFood._id}`, updateFood).then((res) => {
      if (res.data.modifiedCount > 0) {
        toast("successfully data update", { type: "success" });
      }
    });
  };

  const goTo = useNavigate();
  const prePage = () => {
    goTo("/manage-foods");
  };

  return (
    <div className="w-11/12 mx-auto my-10 lg:my-16">
      <ToastContainer />
      <div className="w-3/4 mx-auto mb-5">
        <button className="btn btn-info" onClick={prePage}>
          back to previous page
        </button>
      </div>
      <div>
        <form onSubmit={handleUpdateFood} className="w-3/4 mx-auto">
          <div className="w-full flex flex-col sm:flex-row md:flex-row lg:flex-row items-center gap-8">
            <div className="form-control w-full lg:w-1/2">
              <label className="label">
                <span className="label-text">Food Name</span>
              </label>
              <input
                type="text"
                name="food_name"
                defaultValue={updatedFood?.food_name}
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control w-full lg:w-1/2">
              <label className="label">
                <span className="label-text">Food Image</span>
              </label>
              <input
                type="text"
                name="food_image"
                defaultValue={updatedFood?.food_image}
                className="input input-bordered"
                required
              />
            </div>
          </div>

          <div className="w-full flex flex-col sm:flex-row md:flex-row lg:flex-row items-center gap-8">
            <div className="form-control w-full lg:w-1/2">
              <label className="label">
                <span className="label-text">Food Quantity</span>
              </label>
              <input
                type="text"
                name="food_quantity"
                defaultValue={updatedFood?.food_quantity}
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control w-full lg:w-1/2">
              <label className="label">
                <span className="label-text">Pickup Location</span>
              </label>
              <input
                type="text"
                name="pickup_location"
                defaultValue={updatedFood?.pickup_location}
                className="input input-bordered"
                required
              />
            </div>
          </div>

          <div className="w-full flex flex-col sm:flex-row md:flex-row lg:flex-row items-center gap-8">
            <div className="form-control w-full lg:w-1/2">
              <label className="label">
                <span className="label-text">Expired Date</span>
              </label>
              <input
                type="text"
                name="expired_date"
                defaultValue={updatedFood?.expired_date}
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control w-full lg:w-1/2">
              <label className="label">
                <span className="label-text">Additional Notes</span>
              </label>
              <input
                type="text"
                name="additional_notes"
                defaultValue={updatedFood?.additional_notes}
                className="input input-bordered"
                required
              />
            </div>
          </div>

          <div className="w-full flex flex-col sm:flex-row md:flex-row lg:flex-row items-center gap-8">
            <div className="form-control w-full lg:w-1/2">
              <label className="label">
                <span className="label-text">Donator Name</span>
              </label>
              <input
                type="text"
                name="donar_name"
                defaultValue={updatedFood?.donar_name}
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control w-full lg:w-1/2">
              <label className="label">
                <span className="label-text">Donator Email</span>
              </label>
              <input
                type="text"
                name="donator_email"
                defaultValue={updatedFood?.donator_email}
                className="input input-bordered"
                required
              />
            </div>
          </div>

          <div className="w-full flex flex-col sm:flex-row md:flex-row lg:flex-row items-center gap-8">
            <div className="form-control w-full lg:w-1/2">
              <label className="label">
                <span className="label-text">Donator Image</span>
              </label>
              <input
                type="text"
                name="donator_image"
                defaultValue={updatedFood?.donator_image}
                placeholder="enter img url"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control w-full lg:w-1/2">
              <label className="label">
                <span className="label-text">Food Status</span>
              </label>
              <input
                type="text"
                name="food_status"
                defaultValue="available"
                className="input input-bordered"
                required
              />
            </div>
          </div>

          <div className="form-control mt-6 w-1/2 mx-auto">
            <input
              className="btn btn-neutral"
              type="submit"
              value="update Food"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
export default ManageFoodUpdateData;
