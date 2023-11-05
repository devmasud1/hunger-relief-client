const AddFood = () => {
  const handleAddFood = (e) => {
    e.preventDefault();

    //food_name
    //food_image
    //food_quantity
    //pickup_location
    //expired_date
    //additional_notes
    //donar_name
    //user_email
    //donator_image
    //food_status
  };

  const userEmail = "user@example.com";

  return (
    <div className="w-11/12 mx-auto p-6 my-10">
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
              placeholder="123 Main St, City, State"
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
              placeholder="John Doe"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control w-full lg:w-1/2">
            <label className="label">
              <span className="label-text">User Email</span>
            </label>
            <input
              type="text"
              name="user_email"
              placeholder={userEmail}
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
