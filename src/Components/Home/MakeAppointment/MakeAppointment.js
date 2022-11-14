import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../../assets/images/doctor-small.png";
import GradientButton from "../../SimilarDesign/Button/GradientButton";
const MakeAppointment = () => {
  return (
    <section className="hero mt-40 pt-2 pb-2 lg:pb-0 px-1 rounded-lg">
      <div className="hero-content flex-col lg:flex-row -m-4">
        <img src={img1} className="-mt-32 hidden lg:block" alt="" />
        <div>
          <p className="text-primary font-bold text-2xl">Appointment</p>
          <h1 className="text-3xl lg:text-5xl font-bold text-slate-300">
            Make An Appointment Today!
          </h1>
          <p className="py-6 font-thin text-white">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <Link to={"/appointment"}>
            <GradientButton>Get Started</GradientButton>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
