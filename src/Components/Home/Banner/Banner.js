import React from "react";
import bannerImg from "../../../assets/images/chair.png";
import GradientButton from "../../SimilarDesign/Button/GradientButton";
import CardiItems from "./CardItems/CardiItems";

const Banner = () => {
  return (
    <div>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={bannerImg}
            className="w-full lg:w-1/2 rounded-lg shadow-2xl"
            alt=""
          />
          <div>
            <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <GradientButton>Get Started</GradientButton>
          </div>
        </div>
      </div>
      {<CardiItems></CardiItems>}
    </div>
  );
};

export default Banner;
