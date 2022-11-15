import React, { useState } from "react";
import AppointmentBanner from "./AppointmentBanner/AppointmentBanner";
import AvailableAppointment from "./AvailableAppointment/AvailableAppointment";

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <div className="mx-1 lg:mx-7">
      {
        <div className="">
          <AppointmentBanner
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
          <AvailableAppointment selectedDate={selectedDate} />
        </div>
      }
    </div>
  );
};

export default Appointment;
