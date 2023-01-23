import React from 'react'

function Footer() {
  return (
    <div className='bg-secondary py-3 mt-4'>
      <div className="text-center">
        <p className="mb-0 text-white">Copyright &copy;{(new Date().getFullYear())} OnPoint. All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer
