import React from "react";

const Testimonial = ({ data }) => {
  const { description, img, username, location } = data;
  return (
    <div className="card w-64 mx-auto md:w-80 lg:w-96 bg-base-200 text-primary-content shadow-xl">
      <div className="card-body">
        <p className="text-slate-800 font-light">{description}</p>
        <div className="flex items-center gap-4">
          <div className="avatar">
            <div className="w-10 h-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={img} alt="" />
            </div>
          </div>
          <div>
            <p className="text-slate-800">{username}</p>
            <p className="text-slate-800">{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
