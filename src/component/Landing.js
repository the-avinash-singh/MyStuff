import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import sideImg from "../images/sideImg.png"
import sideImgEarth from "../images/sideImgEarth.gif"
import "../css/Landing.css"

const Landing = () => {
  let navigate = useNavigate();
  const clicked=()=>{
          navigate('/login')
  }
  return (
    <>
    <div className=' shadow my-5 p-4 rounded-4 bg-light'>
    <div className=' d-md-flex flex-row-reverse justify-content-between align-content-center'>
    <div className='d-flex justify-content-end  d-block d-md-inline'>
    <img src={sideImg} alt='img' className='w-100'/>
    </div>
    <div className='my-auto font-monospace w-50 text'>
    <h3 className='fw-bold'>
      Hello everyone we welcome you to Mystuffsafe:)
    </h3>
    Mystuffsafe is a opensource notes app devloped for the ease of user 
    with the help of this site the user can easly access their notes, ideas on the go.
    <button className='btn btn-danger my-2 d-block' onClick={clicked}>Try Now</button>
    </div>
    </div>
    </div>
    <div style={{height:"1px"}}></div>
    <div className=' shadow my-5 p-4 rounded-4 bg-light'>
    <div className=' d-md-flex justify-content-between align-content-center'>
    <div className='d-flex justify-content-end  d-block d-md-inline'>
    <img src={sideImgEarth} alt='img' className='w-100'/>
    </div>
    <div className='my-auto font-monospace w-50 text text-md-end'>
    <h3 className='fw-bold'>
    Take a step towards being Eco-friendly with Mystuffsafe
    </h3>
    You can take a big step for saving mother earth by reducing the use of paper that can drastically reduce deforestration. Use Mystuffsafe for purpose witting your ideas, goles, etc.
    <button className='btn btn-success ms-md-auto my-2 d-block' onClick={clicked}>Take a step</button>
    </div>
    </div>
    </div>
    <div style={{height:"45px"}}></div>

    </>
  )
}

export default Landing
