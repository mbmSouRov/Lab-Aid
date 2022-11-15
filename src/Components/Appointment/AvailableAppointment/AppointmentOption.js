import React from "react";

const AppointmentOption = ({ data, setTreatment }) => {
  const { name, slots } = data;
  return (
    <div className="card w-68 md:w-80 lg:w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="text-2xl text-center font-semibold text-secondary">
          {name}
        </h2>
        <p className="text-center">
          {slots.length > 0 ? `${slots[0]}` : "No Slots. Try Another Day"}
        </p>
        <p className="text-center">
          {slots.length} {slots.length > 1 ? `spaces` : `space`} Available
        </p>
        <div className="card-actions justify-center">
          <label
            disabled={slots.length === 0}
            htmlFor="booking-modal"
            className="btn btn-primary"
            onClick={() => {
              setTreatment(data);
            }}
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;
