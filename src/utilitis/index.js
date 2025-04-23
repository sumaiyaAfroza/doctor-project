import { Bounce, toast } from "react-toastify"

export const getItem = ()=>{
    const bookings = localStorage.getItem('booking')
    if(bookings) return JSON.parse(bookings)
        return []
}

export const addItem = (doctor)=>{
   const bookings = getItem()
   const isShow = bookings.find(show => show.registrationNumber === doctor.registrationNumber)
   if(isShow) return toast.warn(` Already ${doctor.name} booked`, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
    });

    bookings.push(doctor)
   
   toast.success(`✔ Appointment scheduled ${doctor.name} successful`, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
    });
   localStorage.setItem('booking',JSON.stringify(bookings))
}
export const removeItem = (id)=>{
    const item = getItem()
    const remainingBooking = item.filter(cut => cut.registrationNumber !== id)
    localStorage.setItem('booking',JSON.stringify(remainingBooking))
    toast.warn('Appointment Canceled', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
}

