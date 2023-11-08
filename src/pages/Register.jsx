import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../hooks/Provider/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet";

const Register = () => {
  const { createUser, passwordErrMsg } = useContext(AuthContext);
  const location = useLocation();
  const goTo = useNavigate();

  const handleUserRegister = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const imageUrl = e.target.imageUrl.value;

    createUser(email, password, name, imageUrl)
      .then(() => {
        toast("User successfully created!", { type: "success" });
        goTo(location?.state ? location?.state : "/");
      })
      .catch(() => {
        toast("Already use this email!", { type: "error" });
      });

    e.target.name.value = "";
    e.target.email.value = "";
    e.target.password.value = "";
  };
  return (
    <div>
      <Helmet>
        <title>HR | Register</title>
      </Helmet>
      <ToastContainer />
      <div
        className="hero min-h-[68vh]"
        style={{
          backgroundImage: "url(https://i.ibb.co/SXLqYFq/register.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-95"></div>
        <div className="hero-content">
          <div className="w-11/12 mx-auto lg:border-2 border-blue-200">
            <h1 className="text-center mt-5 text-white text-xl font-semibold">
              Sign up now
            </h1>
            <form onSubmit={handleUserRegister} className="card-body">
              <div className="text-white">
                {passwordErrMsg ? passwordErrMsg : ""}
              </div>
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
                    imageUrl
                  </span>
                </label>
                <input
                  required
                  type="text"
                  name="imageUrl"
                  placeholder="Enter you image url"
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
