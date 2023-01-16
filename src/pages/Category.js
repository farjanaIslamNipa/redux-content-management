import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { loadBlogsData } from '../redux/thunk/fetchBlogData';

function Category() {
  const {name} = useParams();
  const { blogs } = useSelector((state) => state.blogData);
  const dispatch = useDispatch();

  const blogCategory = blogs.filter(blog => blog.tag === name)

  useEffect(() => {
    dispatch(loadBlogsData())
  }, [dispatch]);

   return (
    <div>
      {
        blogCategory.map(blog => (
          <div key={blog.id}>
            <p>{blog.title}</p>
          </div>
        ))
      }
    </div>
  )
}

export default Category
