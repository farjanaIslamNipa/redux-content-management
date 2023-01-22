import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { readingHistory } from '../redux/actions/actions';

function BlogCard({blog}) {
  const  {title, description, date, image} = blog;
  const dispatch = useDispatch();
  return (
    <div className='col-md-6 mb-4'>
      <div className='single-blog-card d-flex w-100'>
        <div>
            <div className='blog-card-img'>
              {
                image ? <img className='' src={image} alt={title} /> : <img className='' src="https://i.ibb.co/QMzXG7m/img-1.jpg" alt={title} />
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
