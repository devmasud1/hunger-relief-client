import { Outlet } from "react-router-dom";
import Navbar from "../pages/Home/shared/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet></Outlet>
      footer here
    </div>
  );
};
export default MainLayout;
