import React from "react";


const BookingCard = ({ appCard,removeBooking }) => {
  // console.log(appCard)
  const {registrationNumber,name,education,speciality,fee} = appCard
  return (
    <div className="bg-white p-4 mt-8 rounded-2xl mb-8">

      <div className="flex justify-between items-center space-y-6">
      <div>
      <h1 className="font-bold text-2xl mb-2">{name}</h1>
      <h1 className="text-gray-600 text-lg">{education},{speciality}</h1>
      </div>
     <div>
     <h1 className="text-gray-600 text-lg">Appointment Fee: {fee} Taka + Vat</h1>
     </div>
      </div>
      
      <button
        onClick={() =>removeBooking(registrationNumber)}
        className="w-full text-[#FF0000] text-xl font-bold border py-2 border-[#FF0000] rounded-full "
      >
        Cancel appointment
      </button>
    </div> 
  );
};

export default BookingCard;
