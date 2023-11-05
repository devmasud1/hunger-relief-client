import { Link } from "react-router-dom";
import { AiFillGoogleCircle } from 'react-icons/ai';

const Login = () => {
  const handleGoogleLogIn = () => {};

  const handleUserLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    // e.target.email.value = "";
    // e.target.password.value = "";
  };
  return (
    <div>
      <div
        className="hero h-[68vh]"
        style={{ backgroundImage: "url(https://i.ibb.co/NtZwvJq/logIn.jpg)" }}
      >
     
        <div className="hero-overlay bg-opacity-95"></div>
        <div className="hero-content">
          <div className="w-full border-2 border-blue-200">
            <h1 className="text-center mt-5 text-white text-xl font-semibold">Log in</h1>
            
            <form onSubmit={handleUserLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white text-lg">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white text-lg">
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <div className="mt-6">
                <button
                  onClick={handleGoogleLogIn}
                  className="btn btn-neutral w-full"
                >
                    <AiFillGoogleCircle className="text-2xl"/>
                  Log in with google
                </button>
              </div>

              <p className="mt-3 text-white">
                Do not have account? Please,{" "}
                <Link to="/register" className="text-blue-500">
                  {" "}
                  register
                </Link>{" "}
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
