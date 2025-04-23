import React from 'react'

const Blog = ({ques}) => {
    // console.log(ques)

    const {question,answer,addedAt} = ques
  return (
    <>
    <div className=' p-4 my-10 space-y-5 bg-white rounded-2xl '>
        <h1 className=' pb-3 text-3xl font-bold'>{question}</h1>
        <p className='border-b border-dashed text-gray-600'></p>
        <h1 className='text-lg'><span className='text-blue-700 text-xl'>Answer:</span> <br /> {answer}</h1>
        <p className='border-b border-dashed text-gray-600'></p>
        <p className='text-xl'><i class="ri-calendar-schedule-line"></i> AddedAt: {addedAt}</p>
    </div>
      
    </>
  )
}

export default Blog
