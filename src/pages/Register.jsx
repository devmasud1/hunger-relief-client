import { Link } from "react-router-dom";

const Register = () => {
  const handleUserRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photoUrl = e.target.photoUrl.value;

    // e.target.name.value = "";
    // e.target.email.value = "";
    // e.target.password.value = "";
  };
  return (
    <div>
      <div
        className="hero h-[68vh]"
        style={{
          backgroundImage: "url(https://i.ibb.co/SXLqYFq/register.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-95"></div>
        <div className="hero-content">
          <div className="w-full border-2 border-blue-200">
            <h1 className="text-center mt-5 text-white text-xl font-semibold">
              Sign up now
            </h1>
            <form onSubmit={handleUserRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white text-lg">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white text-lg">Email</span>
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white text-lg">
                    Password
                  </span>
                </label>
                <input
                  required
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white text-lg">
                    Photo Url
                  </span>
                </label>
                <input
                  required
                  type="text"
                  name="photoUrl"
                  placeholder="Enter you img url"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>

              <p className="mt-3 text-white">
                Already have an account? Please{" "}
                <Link to="/logIn" className="text-blue-500">
                  LogIn
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;