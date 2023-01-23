import React from 'react'
import {  useSelector } from 'react-redux'
import BlogCard from '../../component/BlogCard';


function ReadingHistory() {
  const {readingHistory} = useSelector((state) => state.blogData);
  console.log(readingHistory, 'history');

  return (
    <div className='container'>
      <div className="row mt-5">
        {
          readingHistory && readingHistory.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))
        }
      </div>
    </div>
  )
}

export default ReadingHistory
