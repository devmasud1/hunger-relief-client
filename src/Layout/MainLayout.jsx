import { Outlet } from "react-router-dom";
import Navbar from "../pages/Home/shared/Navbar";
import Footer from "../pages/Home/shared/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet></Outlet>
      <Footer/>
    </div>
  );
};
export default MainLayout;
