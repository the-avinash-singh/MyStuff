import React from 'react'
import spinner from "../images/spinner.svg"
import "../css/Spinner.css"

const Spinner = () => {
  return (
    <div>
       <div className='text-center spinner position'>
        <img src={spinner} alt="loading..." />
      </div>
    </div>
  )
}

export default Spinner
