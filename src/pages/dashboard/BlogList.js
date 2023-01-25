import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import DefaultLoader from '../../component/DefaultLoader';
import { deleteBlogData, loadBlogsData } from '../../redux/thunk/fetchBlogData';

function BlogList() {
  const { blogs, loading } = useSelector(state => state.blogData)
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    if(window.confirm('Are you sure??')){
      dispatch(deleteBlogData(id))
    }
   
  }

  useEffect(() => {
    dispatch(loadBlogsData())
  }, [dispatch])

  return (
    <div className='container-fluid px-5 pt-4'>
      <div className='d-flex justify-content-between dashboard-header py-2 px-4 mb-4'>
        <h4 className='mb-0'>All Blogs</h4>
        <div>
          <Link to="add-blog" className='dashboard-header-btn btn px-4'>Add Blog</Link>
        </div>
      </div>
      {
        loading && <div className="position-relative pb-5 mb-5">
        <DefaultLoader />
      </div>
      }

      <div className='table-responsive'>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Published At</th>
              <th className='text-center' scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              blogs && blogs.map((blog, index) => (
                <tr key={blog.id}>
                <th scope="row">{index + 1}</th>
                <td>{blog.title}</td>
                <td>{blog.date}</td>
                <td className='text-center'>
                  <Link to={`edit-post/${blog.id}`} className='btn'><i class="fa-solid fa-pen"></i></Link>
                  <button onClick={() => handleDelete(blog.id)} className='btn'><i class="fa-solid fa-trash"></i></button>
                </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default BlogList
