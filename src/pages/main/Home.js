import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BlogCard from '../../component/BlogCard';
import CategoryHeader from '../../component/CategoryHeader';
import { firstUpload, lastUpload } from '../../redux/actions/actions';
import { loadBlogsData } from '../../redux/thunk/fetchBlogData';



function Home() {
  const { blogs } = useSelector((state) => state.blogData);
  const dispatch = useDispatch();

useEffect(() => {
  dispatch(loadBlogsData())
}, [dispatch]);


  return (
    <div>
      <div className="container">
        <CategoryHeader />
        <div className="text-center mb-5 pt-lg-5 pt-4">
          <button onClick={() => dispatch(lastUpload())} className='btn filter-btn'>Last Upload</button>
          <button onClick={() => dispatch(firstUpload())} className='btn filter-btn mx-md-4 mx-2'>First Upload</button>
          <button onClick={() => dispatch(loadBlogsData())} className='btn filter-btn'>Clear Filter</button>
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
