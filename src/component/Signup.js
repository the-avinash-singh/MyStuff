import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import image from '../images/Pulse.svg'

const Signup = (props) => {
  const [credentails, setCredentails] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    cpassword: "",
  });
  //password confermation
  let match = true;
  if (credentails.cpassword !== credentails.password) {
    match = false;
  }
  const [load,setLoad]=useState(false)
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    setLoad(true)
    e.preventDefault();
    const { name, username, email, password } = credentails;
    if (!match) return;
    const response = await fetch(
      `https://backend-5pjd.onrender.com/api/auth/creataccount`,
      {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, username, email, password }),
      }
    );
    const json = await response.json();
    if (json.Success) {
      //Save and redirect
      setCredentails(json.user);
      localStorage.setItem("token",json.authToken);//here we have saved the auth token in local storage. 
      localStorage.setItem("name", json.name);
      props.showAlert("Account created successfully", "success");
      navigate("/home"); //this will redirect.
    } else {
      props.showAlert("invalid cradentials", "danger");
    }
    setLoad(false)
  };
  const onChange = (e) => {
    setCredentails({ ...credentails, [e.target.name]: e.target.value }); //3 dot-jo ha waha useke aage se likho, jo name attribute h uski value ko field value ke barabr kr do
    if (credentails.cpassword !== credentails.password) {
      match = false;
    }
  };
  return (
    <>
    <div className="mt-3 mx-auto bg-light shadow p-4 rounded-4 mb-5">
      <h2 className="mb-4">Signin to Mystuffsafe.com</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={credentails.name}
            onChange={onChange}
            required
            minLength={2}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            value={credentails.username}
            onChange={onChange}
            required
            minLength={3}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={credentails.email}
            aria-describedby="emailHelp"
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={credentails.password}
            onChange={onChange}
            required
            minLength={6}
            onCopy="return false"
            onCut="return false"
            onPaste="return false"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="cpassword"
            name="cpassword"
            value={credentails.cpassword}
            onChange={onChange}
            required
            minLength={6}
          />
          <span className={`text-danger ${match ? "d-none" : ""}`}>
            Password missmatch.
          </span>
        </div>
        <div className="d-flex">
        {load?<div className=" bg-primary rounded" style={{padding:"0.1rem 1.32rem"}}>
              <img src={image} style={{width:"35px"}} alt=""/>
              </div>
              :<button type="submit" className="btn btn-primary" disabled={!match}>
          SignUp
        </button>}
        </div>
      </form>
      <div className="my-3">
        Already have an account then{" "}
        <Link to="/login" className="fw-semibold fs-5 font-monospace">
          login.
        </Link>
      </div>
    </div>
      <div style={{height:"30px"}}></div>
    </>
  );
};

export default Signup;
