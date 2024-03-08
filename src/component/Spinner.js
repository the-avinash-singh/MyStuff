import React from 'react'
import spinner from "../images/spinner.gif"

const Spinner = () => {
  return (
    <div>
       <div className='text-center'>
        <img className='my-3' src={spinner} alt="loading..." />
      </div>
    </div>
  )
}

export default Spinner
