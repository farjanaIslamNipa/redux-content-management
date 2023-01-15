import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
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
        <div className="row">
          {
            blogs && blogs.map((blog) => (
              <div key={blog.id} className="col-md-4">
              <div>
                <h4>{blog.title}</h4>
              </div>
            </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Home
