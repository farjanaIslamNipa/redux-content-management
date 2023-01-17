import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BlogCard from '../component/BlogCard';
import CategoryHeader from '../component/CategoryHeader';
import { loadBlogsData } from '../redux/thunk/fetchBlogData';



function Home() {
  const { blogs } = useSelector((state) => state.blogData);
  const dispatch = useDispatch();

useEffect(() => {
  dispatch(loadBlogsData())
}, [dispatch])

  return (
    <div>
      <div className="container">
        <CategoryHeader />
        <div className="text-center mb-5 pt-5">
          <button className='btn filter-btn'>All</button>
          <button className='btn filter-btn mx-4'>Last Upload</button>
          <button className='btn filter-btn'>First Upload</button>
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
