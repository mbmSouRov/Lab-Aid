import React from "react";
import Banner from "./Banner/Banner";
import bgImg from "../../assets/images/bg.png";
import bgImg1 from "../../assets/images/appointment.png";
import Services from "./Services/Services";
import MakeAppointment from "./MakeAppointment/MakeAppointment";
import Testimonials from "./Testimonial/Testimonials";

const Home = () => {
  return (
    <div className="mx-1 lg:mx-7">
      {
        <div style={{ background: `url(${bgImg})` }}>
          <Banner />
        </div>
      }
      <Services />
      {
        <div style={{ background: `url(${bgImg1})` }}>
          <MakeAppointment />
        </div>
      }
      <Testimonials />
    </div>
  );
};

export default Home;
