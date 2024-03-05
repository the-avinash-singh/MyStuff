import React from 'react'

const Username = () => {
  return (
    <div className='container mb-5' >
      <span className='fw-semibold text-light fs-1'>Welcome to Mystuffsafe:</span>
 <span className="fs-2 text-light-emphasis d-inline-flex text-wrap mx-2">{(localStorage.getItem('name'))[0].toUpperCase()+localStorage.getItem('name').slice(1)}</span>
    </div>
  )
}

export default Username
