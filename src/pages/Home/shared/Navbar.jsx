import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isNavOpen, setNavOpen] = useState(false);

  const navToggle = () => {
    setNavOpen(!isNavOpen);
  };

  const navItems = [
    { path: "/", text: "Home" },
    { path: "/available-food", text: "Available Foods" },
    { path: "/add-food", text: "Add Food" },
    { path: "/manage-foods", text: "Manage My Foods" },
    { path: "/food-request", text: "My Food Request" },
  ];
  return (
    <div className="bg-gray-100">
      <div className="w-11/12 mx-auto navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <label
              onClick={navToggle}
              tabIndex={0}
              className="btn btn-neutral text-2xl lg:hidden"
            >
              {isNavOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
            </label>
            <ul
              tabIndex={0}
              className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-600 rounded w-64 text-white ${
                isNavOpen ? "block" : "hidden"
              }`}
            >
              {navItems.map((item, index) => (
                <li key={index} className="py-2 ">
                  <NavLink
                    to={item.path}
                    activeClassName="active"
                    className="hover:text-white hover:bg-black"
                  >
                    {item.text}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:h-16 hidden lg:block">
            <div className="flex h-full">
              <img
                src="https://i.ibb.co/b381h4Q/nav-logo.png"
                alt="logo"
                className="object-cover w-full h-full"
              />
              <h2 className="xl:flex md:hidden items-center gap-2 text-2xl font-semibold">
                HUNGER <span className="text-orange-800">RELIEF</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-2">
            {navItems.map((item, index) => (
              <li key={index} className="mr-4">
                <NavLink
                  to={item.path}
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "border-l-2 border-b-4 border-red-900"
                      : ""
                  }
                >
                  {item.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end">
          <Link to="/login">
            <button className=" btn-neutral py-2 px-4 rounded">Log in</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
