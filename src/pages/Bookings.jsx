import React, { useEffect, useState } from "react";
import Booking from "../component/Booking";

const Bookings = ({ data }) => {
  // console.log(data)
  const [displayBooking, setDisplayBooking] = useState([]);
  const [viewAllDoctor, setViewAllDoctor] = useState(false);

  useEffect(() => {
    if (viewAllDoctor) {
      setDisplayBooking(data);
    } else {
      setDisplayBooking(data.slice(0, 6));
    }
  }, [data, viewAllDoctor]);
  return (
    <div>

      <div className="flex flex-col items-center mb-8 ">
      <h1 className="font-bold text-5xl py-4">Our Best Doctors</h1>
      <p className="font-base text-xl text-center">Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. <br /> Whether it's a routine checkup or urgent consultation, book appointments in  <br />minutes and receive quality care you can trust.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {displayBooking.map((booking) => (
        <Booking booking={booking} key={booking.id}></Booking>
      ))}
    </div>

    <div className="flex justify-center my-10 mb-20">
    <button
        onClick={() =>{setViewAllDoctor(!viewAllDoctor)
         if(viewAllDoctor) window.scrollTo(0,400)
        }}
        className="text-center text-white border px-4 rounded-full py-3 text-xl font-semibold bg-blue-600 hover:bg-indigo-800 cursor-pointer "
      >
        {viewAllDoctor ? "View All Doctors" : 'View All Doctors'}
      </button>
    </div>

 
    </div>
  );
};

export default Bookings;