import { Link } from "react-router-dom";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

const ErrorPage = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row gap-4 md:gap-8 lg:gap-20 items-center justify-center">
        <div className="w-full sm:w-full md:w-1/2 lg:w-1/2">
          <img
            src="https://i.ibb.co/Fz6nDyw/error-page.jpg"
            alt="error_image"
            className="w-full"
          />
        </div>
        <div className="w-full sm:w-full md:w-1/2 lg:w-1/2 m-auto text-center">
          <Link to="/">
            <button className="btn btn-accent">
              <BsFillArrowLeftCircleFill className="text-xl" /> Back To Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
