import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = (props) => {

  const[credentails,setCredentails]=useState({username:"",email:"",password:""})
  let navigate=useNavigate();
  const handleSubmit=async(e)=>{
    e.preventDefault();
    const response = await fetch(`http://localhost:10000/api/auth/login`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({username:credentails.username,email:credentails.email,password:credentails.password})
    });
    const json=await response.json();
    if (json.Success){
 //Save and redirect
 localStorage.setItem("token",json.authToken);//here we have saved the auth token in local storage. 
 localStorage.setItem('name',json.name);
 props.showAlert("Logged into your account successfully","success")
 navigate("/")
 e.preventDefault();
    }
    else{
      props.showAlert("invalid details","danger")
    }
   
  }
  const onChange=(e)=>{
    setCredentails({...credentails,[e.target.name]:e.target.value})//3 dot-jo ha waha useke aage se likho, jo name attribute h uski value ko field value ke barabr kr do
}
  return (
    <div className='mt-5 mx-auto shadow p-4 rounded-4'>
      <h2 className='mb-4'>Login to Mystuffsafe.com</h2>
      <form onSubmit={handleSubmit}>{/*onclick can also be used on button because all of them are listener but onsubmit gives and min length require*/}
  <div className="mb-3">
    <label htmlFor="username" className="form-label">Username</label>
    <input type="text" className="form-control" value={credentails.username} id="username" name="username" onChange={onChange} required/>
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email</label>
    <input type="email" className="form-control" value={credentails.email} id="email" name="email" aria-describedby="emailHelp" onChange={onChange}required/>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" value={credentails.password} id="password" name="password" onChange={onChange} required minLength={6}/>
  </div>
  <button type="submit" className="btn btn-primary">Login</button>
</form>
<div className='my-3'>If you don't have an account then <Link to="/signup" className='fw-semibold fs-5 font-monospace'>SignUp.</Link></div>
    </div>
  )
}

export default Login
