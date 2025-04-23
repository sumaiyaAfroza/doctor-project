import React from 'react'
import { Link, useLoaderData, useParams } from 'react-router'
import { addItem } from '../utilitis';


const BookingDetails = () => {
    const data = useLoaderData()
     const {id} = useParams()
     const single = data.find(single => single.registrationNumber === id )
     
     const { education,workplace,fee, image, name, registrationNumber,speciality } = single

     return (
        <div>
            {/* img data bio */}
            <div className=" mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg flex">
          <div className="w-1/3">
            <img  src={image}
              alt={name}
              className="w-96 h-96 rounded-lg object-cover"
            />
          </div>
          <div className="w-2/3 pl-6">
            <h1 className="text-xl font-bold text-gray-800">{name}</h1>
            <p className="text-sm text-gray-600 mt-1">{education}</p>
            <p className="text-sm text-gray-600">{speciality}</p>
            <p className="text-sm text-gray-600 mt-2">
              <span className="font-semibold">Working at</span>
            </p>
            <p className="text-sm text-gray-600">{workplace}</p>
            <div className="flex items-center mt-2">
              <span className="text-gray-500 mr-2">🩺</span>
              <p className="text-sm text-gray-600">Reg No: {registrationNumber}</p>
            </div>
            <div className="mt-3">
              <p className="text-sm font-semibold text-gray-700">Available</p>
              <div className="flex gap-2 mt-1">
                <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-3 py-1 rounded-full">
                  Sunday
                </span>
                <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-3 py-1 rounded-full">
                  Monday
                </span>
                <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-3 py-1 rounded-full">
                  Thursday
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-3">
              <span className="font-semibold">Consultation Fee:</span> Taka {fee} (Incl. Vat) Per Person
            </p>
          </div>
           </div>
           {/* click btn */}
           <div>
           <Link to='/bookings'>
            <button onClick={()=>addItem(single)} className= "w-full text-blue-700 border p-2 rounded-full ">
              Book Appointment Now
            </button>
          </Link>
           </div>
        </div>
    );
};

 

export default BookingDetails

