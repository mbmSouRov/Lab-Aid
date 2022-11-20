import { format } from "date-fns";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../contexts/AuthProvider";

const BookingModal = ({ treatment, selectedDate, setTreatment, refetch }) => {
  const { user } = useContext(AuthContext);
  const { name, slots } = treatment;

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const slot = form.slot.value;
    const username = form.username.value;
    const email = form.email.value;
    const phone = form.phone.value;

    const booking = {
      treatment: name,
      username: username,
      slot,
      email: email,
      phone: phone,
      selectedDate: `${format(selectedDate, "PP")}`,
    };

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledge) {
          setTreatment(null);
          toast.success("Booking Confirmed");
          refetch();
        } else {
          toast.error(data.message);
        }
      });
  };
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-2xl font-bold">{name}</h3>
          <form
            onSubmit={handleOnSubmit}
            className="grid grid-cols-1 gap-5 mt-10"
          >
            <input
              name="selectedDate"
              type="text"
              defaultValue={`${format(selectedDate, "PP")}`}
              className="input input-bordered input-md w-full cursor-pointer font-semibold"
              disabled
            />
            <select name="slot" className="select select-bordered w-full">
              {slots.map((option, i) => (
                <option value={option} key={i}>
                  {option}
                </option>
              ))}
            </select>
            <input
              name="username"
              type="text"
              defaultValue={user?.displayName}
              placeholder="Name"
              className="input input-bordered input-md w-full"
              disabled
            />
            <input
              name="email"
              type="text"
              defaultValue={user?.email}
              placeholder="Email"
              className="input input-bordered input-md w-full"
              disabled
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone Number"
              className="input input-bordered input-md w-full"
              required
            />
            <input
              className="btn btn-accent w-full"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
