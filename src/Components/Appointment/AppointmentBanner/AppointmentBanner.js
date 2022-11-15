import React from "react";
import chair from "../../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
  return (
    <div className="hero200">
      <div className="hero-content flex-col lg:flex-row-reverse justify-evenly">
        <img
          src={chair}
          className="rounded-lg shadow-2xl w-1/2"
          alt="doctors chair"
        />
        <div>
          <DayPicker
            className="max-w-sm rounded-lg shadow-lg bg-base-100 p-4 lg:p-10 font-light"
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
          />
          <p className="overflow-x-auto p-5">
            Selected Day: {format(selectedDate, "PPPP")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
