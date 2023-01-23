import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Main/Navbar'


function Dashboard() {
  return (
    <div>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
