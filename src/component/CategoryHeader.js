import React from 'react'
import { Link } from 'react-router-dom'
import software from '../images/category/software.jpg'
import management from '../images/category/management-2.jpg'
import configure from '../images/category/configure.jpg'

function CategoryHeader() {
  return (
    <div>
      <div className="d-flex category-collage-section w-100 mt-4 mb-4">
        <Link to='/category/management' className='d-block category-card'>
          <div className='position-relative h-100'>
            <img className='management-img' src={management} alt="" />
            <div className='category-name'>
              <h4 className='px-4 py-2 text-500'>Management</h4>
            </div>
          </div>
        </Link>
        <div className='w-100'>
          <Link to="/category/configure" className='d-block category-card'>
            <div className='position-relative h-100'>
              <img className='configure-img' src={configure} alt="" />
              <div className='category-name configure-category'>
                <h4 className='px-4 py-2 text-500'>Configure</h4>
              </div>
            </div>
          </Link>
          <Link to="/category/software" className='d-block category-card'>
            <div className='position-relative h-100'>
              <img className='software-img' src={software} alt="" />
              <div className='category-name'>
                <h4 className='px-4 py-2 text-500'>Software</h4>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CategoryHeader
