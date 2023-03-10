import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { readingHistory } from '../redux/actions/actions';
import defaultImage from '../images/category/management-2.jpg'

function BlogCard({blog}) {
  const  {title, description, date, image} = blog;
  const dispatch = useDispatch();
  return (
    <div className='col-lg-6 mb-4'>
      <div className='single-blog-card d-xl-flex d-lg-block d-md-flex w-100'>
        <div className='mb-xl-0 mb-2'>
            <div className='blog-card-img'>
              {
                image ? <img className='' src={image} alt={title} /> : <img className='' src={defaultImage} alt={title} />
              }
                
            </div>
        </div>
        <div className='ps-2'>
            <h5 style={{fontSize:'18px'}} className="fw-bold">{title}</h5>
            <div><small className='fw-bold text-muted'>Published at: {date}</small></div>
            <p className='mb-1'>{description.slice(0, 150)}...</p>
            
            {/* <button className='read-more-btn pe-5'>Read More</button> */}
            <Link onClick={() => dispatch(readingHistory(blog))} className='read-more-btn pe-5' to={`/blog/${blog.id}`}>Read More</Link>
        </div>
      </div>
    </div>
  )
}

export default BlogCard
