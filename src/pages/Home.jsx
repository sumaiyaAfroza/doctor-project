import React from 'react'

import Banner from '../component/Banner'
import Bookings from './Bookings'
import { useLoaderData } from 'react-router'
import Counter from '../component/Counter'

const Home = () => {
    const data = useLoaderData()
    // console.log(data)
    
  return (
    <div>
        <Banner></Banner>
        <Bookings data={data} ></Bookings>
        <Counter></Counter>
      
    </div>
  )   
}

export default Home
