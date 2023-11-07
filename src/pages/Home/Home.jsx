import { useEffect } from "react";
import About from "./About/About";
import Banner from "./Banner/Banner";
import Featured from "./Featured/Featured";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
  useEffect(()=> {
    document.title = "HR | Home"
  })
  return (
    <>
      <Banner />
      <Featured/>
      <About/>
      <Testimonial/>
    </>
  );
};
export default Home;
