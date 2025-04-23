import React, { useEffect, useState } from 'react'
import EmptyState from './EmptyState'
import { getItem, removeItem } from '../utilitis'
import BookingCard from './BookingCard'
import Chartl from './Chartl'

const Appointment = () => {
  const [showBooking, setShowBooking] = useState([])
   useEffect(()=>{
    setShowBooking(getItem)
   },[])

   const removeBooking = (id)=>{
    removeItem(id)
    setShowBooking(getItem)
   }
   if(showBooking.length < 1) return <EmptyState></EmptyState>

  return (
    <div>
      <Chartl showBooking={showBooking}></Chartl>
      <div className="text-center">
      <h1>My Today Appointments</h1>
      <p>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.</p>
      </div>
      {showBooking.map(appCard=> <BookingCard removeBooking={removeBooking}  appCard={appCard}></BookingCard>)}
      
    </div>
  )
}
export default Appointment
