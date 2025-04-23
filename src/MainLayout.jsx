import React, { Suspense, useEffect, useState } from 'react'
import Navbar from './component/Navbar'
import { Outlet, useLocation } from 'react-router'
import Footer from './component/Footer'


const MainLayout = () => {
    const location = useLocation()
    const hideFooterRoutes = ['/contact'];
    const [isLoading, setIsLoading] = useState(false);
    

    useEffect(() => {
        setIsLoading(true);
        const timer = setTimeout(() => setIsLoading(false), 1000);
        return () => clearTimeout(timer);
    }, [location.key]);

  return (
    <div className='bg-[#EFEFEF] mx-2'>
        <Navbar></Navbar>


       <div className='min-h-[500px]'>
        <div className='max-w-screen-2xl mx-auto px-2 md:px-1'>
        {isLoading ? (
                        <div className='flex justify-center items-center min-h-[calc(100vh-8rem)]'>
                            <span className="loading loading-bars loading-xl"></span>
                        </div>
                    ) : (
                        <Suspense>
                            <Outlet/>
                        </Suspense>
                    )}
        </div>
       </div>

       {!hideFooterRoutes.includes(location.pathname) && <Footer />}

    </div>
  )
}
export default MainLayout
