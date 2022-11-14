import React from "react";
import clock from "../../../../assets/icons/clock.svg";
import marker from "../../../../assets/icons/marker.svg";
import phone from "../../../../assets/icons/phone.svg";
import CardItem from "./CardItem";
const CardiItems = () => {
  const CardItems = [
    {
      id: 1,
      title: "Opening Hours",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, unde.",
      icons: clock,
      backgroundColor: "bg-gradient-to-r from-primary to-secondary",
    },
    {
      id: 2,
      title: "Visit Our Location",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, unde.",
      icons: marker,
      backgroundColor: "bg-accent",
    },
    {
      id: 3,
      title: "Contact With Us",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, unde.",
      icons: phone,
      backgroundColor: "bg-gradient-to-r from-primary to-secondary",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-0 mt-5 lg:my-10">
      {CardItems.map((x) => (
        <CardItem key={x.id} data={x}></CardItem>
      ))}
    </div>
  );
};

export default CardiItems;
