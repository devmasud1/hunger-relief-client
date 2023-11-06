import { Outlet } from "react-router-dom";
import Navbar from "../pages/Home/shared/Navbar";
import Footer from "../pages/Home/shared/Footer";
import { useEffect, useState } from "react";
import LoadingSpinnerMain from "../pages/LoadingSpinnerMain";

const MainLayout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      {loading ? (
        <LoadingSpinnerMain />
      ) : (
        <div>
          <Navbar />
          <Outlet></Outlet>
          <Footer />
        </div>
      )}
    </>
  );
};
export default MainLayout;
