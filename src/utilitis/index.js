export const getItem = ()=>{
    const bookings = localStorage.getItem('booking')
    if(bookings) return JSON.parse(bookings)
        return []
}

export const addItem = (doctor)=>{
   const bookings = getItem()
   const isShow = bookings.find(show => show.registrationNumber === doctor.registrationNumber)
   if(isShow) return console.log("already ase")
   bookings.push(doctor)
   localStorage.setItem('booking',JSON.stringify(bookings))
}
export const removeItem = (id)=>{
    const item = getItem()
    const remainingBooking = item.filter(cut => cut.registrationNumber !== id)
    localStorage.setItem('booking',JSON.stringify(remainingBooking))
}

