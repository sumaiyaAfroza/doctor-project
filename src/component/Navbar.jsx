import React from 'react'
import { Link, NavLink } from 'react-router'
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <div>
        <div className="navbar py-6 px-16 mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-xl">
        <li><NavLink to='/' className={({isActive})=> isActive? 'border-b-2 rounded-none' : ''}> Home</NavLink></li>
      <li><NavLink to='/bookings'  className={({isActive})=> isActive? 'border-b-2 rounded-none' : ''}>Bookings</NavLink></li>
      <li><NavLink to='/blogs'  className={({isActive})=> isActive? 'border-b-2 rounded-none' : ''}>Blogs</NavLink></li>
      <li><NavLink to='/contact'  className={({isActive})=> isActive? 'border-b-2 rounded-none' : ''}>Contact</NavLink></li>
      </ul>
    </div>
    <Link to='/'> <img className='hidden md:block' src={logo} alt="" /></Link>
    <Link to='/' className="btn btn-ghost text-2xl pl-2 ">DocTalk</Link>
  </div>

  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-lg">
      <li><NavLink to='/' className={({isActive})=> isActive? 'border-b-2 rounded-none' : ''}> Home</NavLink></li>
      <li><NavLink to='/bookings'  className={({isActive})=> isActive? 'border-b-2 rounded-none' : ''}>Bookings</NavLink></li>
      <li><NavLink to='/blogs'  className={({isActive})=> isActive? 'border-b-2 rounded-none' : ''}>Blogs</NavLink></li>
      <li><NavLink to='/contact'  className={({isActive})=> isActive? 'border-b-2 rounded-none' : ''}>Contact</NavLink></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn text-white p-4 bg-[#176AE5] rounded-full py-6 px-4 text-lg  ">Emergency</a>
  </div>
</div>
      
    </div>
  )
}

export default Navbar
