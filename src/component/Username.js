import React, { useEffect, useState } from 'react'

const Username = () => {
  const [credentails,setCredentails]=useState('')
  const user = async () => {
    const response = await fetch(
      `https://backend-5pjd.onrender.com/api/auth/getuser`,
      {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify({name:credentails.name})
      }
    );
    const json = await response.json();
    setCredentails(json);
  };
  useEffect(()=>{
    user();
    if(credentails.name){
      if(localStorage.getItem('name')!==credentails.name){
        localStorage.setItem('name',credentails.name)
      }
    }
    // eslint-disable-next-line 
  },[])
  return (
    <div className='container mb-5' >
      <span className='fw-semibold text-light fs-1'>Welcome to Mystuffsafe:</span>
{localStorage.getItem('name')&& <span className="fs-2 text-light-emphasis d-inline-flex text-wrap mx-2">{(localStorage.getItem('name'))[0].toUpperCase()+localStorage.getItem('name').slice(1)}</span>}
    </div>
  )
}

export default Username
