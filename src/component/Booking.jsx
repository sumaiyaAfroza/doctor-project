import React from "react";
import { Link } from "react-router";


const Booking = ({ booking }) => {
//   console.log(booking)

  const { experience, image, name, registrationNumber,speciality
  } = booking;

  return (
    <div className="">
      <div className="card bg-base-100 shadow-sm p-[28px]">
        <figure>
          <img className="w-full h-86" src={image} alt="Shoes" />
        </figure>
        <div className="card-actions justify-start mt-2 mb-2">
          <div className="badge badge-outline bg-green-100  text-green-600">Available</div>
          <div className="badge badge-outline text-blue-700 bg-blue-100">{experience}</div>
        </div>
        <div className="space-y-2">
          <h2 className="card-title font-bold text-2xl"> {name}</h2>
          <p className=" text-gray-600 text-xl">{speciality}</p>
          <p className="border-b border-dashed"></p>
          <p className=" text-gray-600 text-lg "><i class="ri-registered-line"></i><span className="pl-2"> Reg No:</span>{registrationNumber}</p>
          <Link to={`/doctor/${registrationNumber}`}>
            {" "}
            <button className="text-blue-700 border w-full py-3 text-xl font-semibold rounded-full hover:bg-blue-200 cursor-pointer ">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Booking;
