import React, { useState } from 'react'

const Username = () => {
  const[credentails,setCredentails]=useState({username:""})
  const user=async()=>{
    const response = await fetch(`http://localhost:5000/api/auth/getuser`, {
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
    <div className='container p-2 rounded shadow-sm ' >
      <span className='fw-semibold fs-2'>Welcome to your Stuff:</span>
 <span className="fs-2 mx-2">{credentails.username}</span>
    </div>
  )
}

export default Username
