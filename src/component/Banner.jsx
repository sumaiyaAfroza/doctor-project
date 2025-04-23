import React from 'react'
import banner1 from '../assets/banner-img-1.png'
import banner2 from '../assets/banner2.jpg'

const Banner = () => {
  return (
    <div className="hero border-4 border-[#FFFFFF] py-16 mb-[80px] rounded-3xl bg-gradient-to-b from-transparent to-[#FFFFFF]">
            <div className="hero-content text-center">
                <div>
                    <h1 className="text-xl md:text-5xl  font-bold">Dependable Care, Backed by Trusted <br /> Professionals.</h1>
                    <p className="py-6">
                    Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a <br /> routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
                    </p>
                    <div className='flex gap-5 w-full md:w-[50%]'>
                        <img className='w-[578px] rounded-3xl hidden md:block ' src={banner1} alt="" />
                        <img className='w-[578px] rounded-3xl' src={banner2} alt="" />
                    </div>
                </div>
            </div>
        </div>
    
  )
}

export default Banner
