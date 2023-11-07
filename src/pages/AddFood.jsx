import { useContext } from "react";
import { AuthContext } from "./../hooks/Provider/AuthProvider";
import UseAxios from "../hooks/UseAxios/UseAxios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet";

const AddFood = () => {
  const { user } = useContext(AuthContext);
  const axiosUrl = UseAxios();

  const donatorName = user.displayName;
  const donatorEmail = user.email;
  const donatorImage = user.photoURL;

  const handleAddFood = (e) => {
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

    const addFood = {
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

    axiosUrl
      .post("/api/v1/food", addFood)
      .then((res) => {
        if (res.data.insertedId) {
          toast("successfully request sent", { type: "success" });
        }
      })
      .catch(toast("something wrong", { type: "error" }));
  };

  return (
    <div className="w-11/12 mx-auto p-6 my-10">
      <Helmet>
        <title>HR | Add Food</title>
      </Helmet>
      <ToastContainer />
      <h1 className="text-3xl font-semibold my-4 text-center">
        Add A Single Food
      </h1>
      <form onSubmit={handleAddFood} className="w-3/4 mx-auto">
        <div className="w-full flex flex-col sm:flex-row md:flex-row lg:flex-row items-center gap-8">
          <div className="form-control w-full lg:w-1/2">
            <label className="label">
              <span className="label-text">Food Name</span>
            </label>
            <input
              type="text"
              name="food_name"
              placeholder="Enter Food Name"
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
              placeholder="Food Image URL"
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
              placeholder="Enter food quantity"
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
              placeholder="123 Main St, City, State"
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
              placeholder="Enter Expired Date"
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
              placeholder="say something here...."
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
              defaultValue={donatorName}
              placeholder="Enter name"
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
              defaultValue={donatorEmail}
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
              defaultValue={donatorImage}
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
          <input className="btn btn-neutral" type="submit" value="Add Food" />
        </div>
      </form>
    </div>
  );
};

export default AddFood;
