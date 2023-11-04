import { FaInstagram } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-base-200">
      <footer className="footer p-10 text-base-content sm:w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto">
        <aside>
          <img
            className="w-32 h-20"
            src="https://i.ibb.co/b381h4Q/nav-logo.png"
            alt="logo"
          />
          <h1 className="text-xl font-bold">
            Hunger <span className="text-red-900">Relief</span>
          </h1>
        </aside>
        <nav>
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
        </nav>
        <nav>
          <header className="footer-title">Address</header>
          <a className="link link-hover">New York City</a>
          <a className="link link-hover">(987) 654-3210</a>
          <a className="link link-hover">https://hunger-relief0.web.app</a>
        </nav>

        <form>
          <header className="footer-title">Contact with us</header>
          <fieldset className="form-control w-full sm:w-80">
            <label className="label mb-1">
              <span className="label-text">Your email address</span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="username@gmail.com"
                className="input input-bordered w-full pr-16"
              />
              <button className="btn btn-neutral absolute top-0 right-0 rounded-l-none">
                contact
              </button>
            </div>
          </fieldset>
        </form>
      </footer>
      <div className="bg-neutral text-neutral-content">
        <footer className="footer py-4 w-3/4 justify-center lg:border-l-2 lg:border-r-2  mx-auto items-center">
          <aside className="items-center grid-flow-col">
            <p className="text-center">
              Copyright © 2023 - All right reserved by hunger relief
            </p>
          </aside>
          <nav className="grid-flow-col gap-4 items-center text-center m-auto md:place-self-center md:justify-self-end">
            <a className="cursor-pointer text-2xl">
              <BsFacebook />
            </a>
            <a className="cursor-pointer text-2xl">
              <FaInstagram />
            </a>
            <a className="cursor-pointer text-2xl">
              <AiFillTwitterCircle />
            </a>
          </nav>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
