import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BlogCard from '../../component/BlogCard';
import CategoryHeader from '../../component/CategoryHeader';
import { firstUpload, lastUpload } from '../../redux/actions/actions';
import { loadBlogsData } from '../../redux/thunk/fetchBlogData';



function Home() {
  const { blogs } = useSelector((state) => state.blogData);
  const dispatch = useDispatch();

// const sorted_blogs = blogs.sort((a,b) => {
//   return new Date(a.date).getTime() - new Date(b.date).getTime()
// });

useEffect(() => {
  dispatch(loadBlogsData())
}, [dispatch]);


  return (
    <div>
      <div className="container">
        <CategoryHeader />
        <div className="text-center mb-5 pt-5">
          <button onClick={() => dispatch(loadBlogsData())} className='btn filter-btn'>Clear Filter</button>
          <button onClick={() => dispatch(lastUpload())} className='btn filter-btn mx-4'>Last Upload</button>
          <button onClick={() => dispatch(firstUpload())} className='btn filter-btn'>First Upload</button>
        </div>
        <div className="row">
          {
            blogs && blogs.map((blog) => (
             <BlogCard key={blog.id} blog={blog} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Home
