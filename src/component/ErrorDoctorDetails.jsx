import React from 'react'
import { Link } from 'react-router'

const ErrorDoctorDetails = ({id}) => {

  return (
    <div>
        <div className='bg-white w-full text-center space-y-6 p-10'>
        <h2 className='font-bold text-5xl'>No Doctor Found</h2>
        <p className='text-gray-600 text-2xl'>No Doctor Found With This registration No-</p>
        <h1 className='text-2xl font-semibold'><i class="ri-add-circle-line"></i>  {id}</h1>
        
        <Link to='/'>
        <button className='bg-blue-800 text-white px-6 py-2 text-2xl rounded-2xl'>View All Doctor</button>
        </Link>
        </div>
        
      
    </div>
  )
}

export default ErrorDoctorDetails
