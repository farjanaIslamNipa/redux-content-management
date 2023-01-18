import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import BlogCard from '../../component/BlogCard';
import { loadBlogsData } from '../../redux/thunk/fetchBlogData';

function Category() {
  const {name} = useParams();
  const { blogs } = useSelector((state) => state.blogData);
  const dispatch = useDispatch();

  const blogCategory = blogs.filter(blog => blog.tag === name)

  useEffect(() => {
    dispatch(loadBlogsData())
  }, [dispatch]);

   return (
    <div className='container'>
      <div className="mt-4 category-header p-3 mb-4">
        <h3 className='text-capitalize text-center mb-0'>{name}</h3>
      </div>
      <div className='row pt-1'>
        {
          blogCategory.map(blog => (
            <BlogCard key={blog.id} blog={blog} />
          ))
        }
      </div>
    </div>
  )
}

export default Category
