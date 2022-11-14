import React from "react";
import img1 from "../../../assets/images/fluoride.png";
import img2 from "../../../assets/images/cavity.png";
import img3 from "../../../assets/images/whitening.png";
import Service from "./Service";
const Services = () => {
  const serviceItems = [
    {
      id: 1,
      title: "Fluoride Treatment",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, aperiam.",
      img: img1,
    },
    {
      id: 2,
      title: "Cavity Filling",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, aperiam.",
      img: img2,
    },
    {
      id: 3,
      title: "Teeth Whitening",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, aperiam.",
      img: img3,
    },
  ];
  return (
    <div>
      <div className="my-20">
        <p className="text-3xl text-primary font-semibold text-center uppercase">
          Our Services
        </p>
        <p className="text-4xl text-center my-5">Service We Provide</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-0 mt-5 lg:my-10 gap-2">
        {serviceItems.map((x) => (
          <Service key={x.id} data={x}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
