import React from "react";
const CardItem = ({ data }) => {
  const { icons, title, description, backgroundColor } = data;
  return (
    <div
      className={`card w-64 mx-auto md:w-80 lg:w-96 ${backgroundColor} shadow-xl text-slate-300`}
    >
      <div className="card-body flex lg:flex-row items-center mx-auto">
        <div>
          <img className="w-40 h-40" src={icons} alt=""></img>
        </div>
        <div>
          <h2 className="card-title my-5 mx-4 lg:mx-0">{title}</h2>
          <p className="my-5 mx-4 lg:mx-0">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
