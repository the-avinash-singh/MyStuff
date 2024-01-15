import React, { useState } from 'react'

const Username = () => {
  const[credentails,setCredentails]=useState({username:""})
  const user=async()=>{
    const response = await fetch(`https://my-stuff-two.vercel.app/api/auth/getuser`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "auth-token":localStorage.getItem("token")
      },
      body: JSON.stringify({name:credentails.name})
    });
    const json=await response.json();
    setCredentails(json);
  }
  if(credentails.username===""){
    user();
  }
  return (
    <div className='container mb-5' >
      <span className='fw-semibold text-light fs-1'>Welcome to Mystuffsafe:</span>
 <span className="fs-2 text-light-emphasis d-inline-flex text-wrap mx-2">{credentails.username}</span>
    </div>
  )
}

export default Username
