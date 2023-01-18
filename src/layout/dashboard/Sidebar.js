import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div className='sidebar-content'>
      <ul>
        <li>
            <Link to="/dashboard">All Blogs</Link>
        </li>
        <li>
            <Link to="/dashboard/add-post">Add Post</Link>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
