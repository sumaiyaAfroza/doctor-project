import { createBrowserRouter } from "react-router";
import MainLayout from "../MainLayout";
import Home from "../pages/Home";
import Blogs from "../pages/Blogs";
import Contact from "../pages/Contact";
import BookingDetails from "../component/BookingDetails";
import Appointment from "../component/Appointment";


export const router = createBrowserRouter([
    {
        path:'/',
        Component: MainLayout,
        children:[
            {
                path:'/',
                Component:Home,
                loader:()=>fetch('/fakeData.json')
            },
            {
                path:'/bookings',
                Component:Appointment,
            },
            {
                path:'/blogs',
                Component: Blogs,
                loader:()=>fetch('/blogsData.json')
            },
            {
                path:'/contact',
                Component: Contact,
            },
            {
                path:'/doctor/:id',
                Component: BookingDetails,
                loader:()=>fetch('/fakeData.json')
               
            }
        ]
    }
])