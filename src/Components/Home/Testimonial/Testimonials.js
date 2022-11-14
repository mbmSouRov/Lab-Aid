import React from "react";
import img1 from "../../../assets/images/people1.png";
import img2 from "../../../assets/images/people2.png";
import img3 from "../../../assets/images/people3.png";
import Testimonial from "./Testimonial";
const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: img1,
      username: "Winson Herry",
      location: "California",
    },
    {
      id: 2,
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: img2,
      username: "Winson Herry",
      location: "California",
    },
    {
      id: 3,
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: img3,
      username: "Winson Herry",
      location: "California",
    },
  ];
  return (
    <div>
      <div className="my-10">
        <p className="text-primary text-xl font-semibold">Testimonial</p>
        <p className="text-4xl">What Our Patients Says</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-0 mt-5 lg:my-10 gap-5 my-10">
        {reviews.map((x) => (
          <Testimonial key={x.id} data={x}></Testimonial>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
