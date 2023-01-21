import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { deleteBlogData, loadBlogsData } from '../../redux/thunk/fetchBlogData';

function BlogList() {
  const { blogs } = useSelector(state => state.blogData)
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteBlogData(id))
  }

  useEffect(() => {
    dispatch(loadBlogsData())
  }, [dispatch])

  return (
    <div>
      <h3>All Blogs</h3>
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
              <td>
                <Link to={`edit-post/${blog.id}`} className='btn'><i class="fa-solid fa-pen"></i></Link>
                <button onClick={() => handleDelete(blog.id)} className='btn'><i class="fa-solid fa-trash"></i></button>
              </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default BlogList
