import React from "react";
import { Link, useLoaderData, useParams } from "react-router";
import { addItem } from "../utilitis";
import ErrorDoctorDetails from "./ErrorDoctorDetails";

const BookingDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const single = data.find((single) => single.registrationNumber === id);
  if(!single){
    return <ErrorDoctorDetails id={id}></ErrorDoctorDetails>
  }
 
  const {
    availability,
    education,
    workplace,
    fee,
    image,
    name,
    registrationNumber,
    speciality,
    
  } = single;

  return (
    <div>
      {/*  doctor profile */}
      <div className="bg-white py-5 px-5 md:py-16  md:px-24 text-center ">
        <h1 className="font-bold text-2xl md:text-4xl">Doctor’s Profile Details</h1>
        <p className="text-lg md:text-xl mt-5 text-gray-600">
        Trusted Care, Expertly Delivered.
        </p>
      </div>

      {/* img data bio */}
      <div className=" mx-auto mt-10 space-y-4 p-6 bg-white shadow-lg rounded-lg md:flex">
        <div className="w-full md:w-1/3">
          <img 
            src={image}
            alt={name}
            className="w-96 h-96 rounded-lg object-cover"
          />
        </div>


        <div className="w-2/3 pl-6 space-y-4">
          <h1 className=" text-2xl md:text-5xl font-bold text-gray-800">{name}</h1>
          <div>
          <p className="text-xl text-gray-600 mt-1">{education}</p>
          <p className="text-xl text-gray-600">{speciality}</p>
          </div>
          <p className="text-xl text-gray-600 mt-2">
            <span className="font-semibold text-xl">Working at</span><p className="text-xl font-bold text-black">{workplace}</p>
          </p>
          <p className="border-b border-dashed"></p>
          
          <div className="flex items-center mt-2">
            <span className="text-gray-500 mr-2">🩺</span>
            <p className="text-xl text-gray-600">
              Reg No: {registrationNumber}
            </p>
            
          </div>

          <p className="border-b border-dashed"></p>

          <p className="gap-6 font-bold text-2xl">Available : 
            {availability.map(day => 
              <button className="text-[#FFA000] ml-3 text-lg bg-[#FFA0001A] py-2 px-3 font-semibold rounded-lg md:rounded-full"> {day.day}</button>
            )}
          </p>



          <p className="text-sm text-gray-600 mt-3">
            <span className="font-bold text-2xl text-black">Consultation Fee: </span> <span className="text-blue-700 text-lg font-semibold">Taka {fee}</span>{" "}
           <span className="text-gray-600 text-lg"> (Incl. Vat) </span><span className="text-blue-700  text-lg font-semibold">Per Person</span>
          </p>
        </div>
      </div>
      {/* click btn */}
      <div className="bg-white my-10 ">
        <h1 className="text-center font-bold text-3xl py-6">Book an Appointment</h1>
        <p className="border-b border-dashed text-gray-400"></p>

        <div className="md:flex pl-6 md:px-6 justify-between items-centers my-4">
          <h1 className="font-bold text-xl">Available</h1>
          <h1 className="badge badge-outline bg-green-100  text-green-600">
            Doctor Available Today
          </h1>
        </div>
        <p className="border-b border-gray-300 mb-6"></p>
        <h1 className="text-yellow-600 bg-amber-100 p-2 md:rounded-full w-4/5 text-lg mx-auto"><i class="ri-error-warning-line"></i><span>Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.</span></h1>

        <Link to="/bookings">
          <button
            onClick={() => addItem(single)}
            className="w-full my-6 text-white bg-blue-700 border p-2 py-3 text-xl font-semibold rounded-full hover:bg-indigo-800 cursor-pointer "
          >
            Book Appointment Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BookingDetails;