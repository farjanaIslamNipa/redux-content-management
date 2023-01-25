import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BlogCard from '../../component/BlogCard';
import CategoryHeader from '../../component/CategoryHeader';
import DefaultLoader from '../../component/DefaultLoader';
import { firstUpload, lastUpload } from '../../redux/actions/actions';
import { loadBlogsData } from '../../redux/thunk/fetchBlogData';



function Home() {
  const { blogs, loading } = useSelector((state) => state.blogData);
  const dispatch = useDispatch();

useEffect(() => {
  dispatch(loadBlogsData())
}, [dispatch]);


  return (
    <div>
      <div className="container">
        <CategoryHeader />
        <div className="text-center mb-sm-5 mb-4 pt-lg-5 pt-sm-4 pt-0">
          <button onClick={() => dispatch(lastUpload())} className='btn filter-btn'>Last Upload</button>
          <button onClick={() => dispatch(firstUpload())} className='btn filter-btn mx-md-4 mx-2'>First Upload</button>
          <button onClick={() => dispatch(loadBlogsData())} className='btn filter-btn'>Clear Filter</button>
        </div>
        <div>
          {
            loading && <div className="position-relative pb-5 mb-5">
            <DefaultLoader />
          </div>
          }

          <div className="row">
            {
              blogs && blogs.map((blog) => (
               <BlogCard key={blog.id} blog={blog} />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
