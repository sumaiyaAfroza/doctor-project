import React from 'react'
import { useLoaderData } from 'react-router'
import Blog from '../component/Blog'

const Blogs = () => {
  const blog = useLoaderData()
  // console.log(blog)

 
  return (
    <div>
      {blog.map(ques => <Blog ques={ques}></Blog> )}
      
    </div>
  )
}

export default Blogs
