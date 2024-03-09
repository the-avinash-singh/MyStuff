import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import image from "../images/Pulse.svg"

const Login = (props) => {
  const [credentails, setCredentails] = useState({
    username: "",
    email: "",
    password: "",
  });
  let navigate = useNavigate();
  const [load,setLoad]=useState(false)
  const handleSubmit = async (e) => {
    setLoad(true)
    e.preventDefault();
    const response = await fetch(
      `https://backend-5pjd.onrender.com/api/auth/login`,
      {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: credentails.username,
          email: credentails.email,
          password: credentails.password,
        }),
      }
    );
    const json = await response.json();
    if (json.Success) {
      //Save and redirect
      localStorage.setItem("token", json.authToken); //here we have saved the auth token in local storage.
      localStorage.setItem("name", json.name);
      props.showAlert("Logged into your account successfully", "success");
      navigate("/home");
      e.preventDefault();
    } else {
      props.showAlert("invalid details", "danger");
    }
    setLoad(false)
  };
  const onChange = (e) => {
    setCredentails({ ...credentails, [e.target.name]: e.target.value }); //3 dot-jo ha waha useke aage se likho, jo name attribute h uski value ko field value ke barabr kr do
  };
  return (
    <>
      <div className="mt-5 mx-auto bg-light shadow p-4 rounded-4 mb-5">
        <h2 className="mb-4">Login to Mystuffsafe.com</h2>
        <form onSubmit={handleSubmit}>
          {/*onclick can also be used on button because all of them are listener but onsubmit gives and min length require*/}
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              value={credentails.username}
              id="username"
              name="username"
              onChange={onChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              value={credentails.email}
              id="email"
              name="email"
              aria-describedby="emailHelp"
              onChange={onChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              value={credentails.password}
              id="password"
              name="password"
              onChange={onChange}
              required
              minLength={6}
            />
          </div>
          <div className="d-flex">
          {load?<div className=" bg-primary rounded" style={{padding:"0.1rem 0.95rem"}}>
              <img src={image} style={{width:"35px"}} alt=''/>
              </div>
              :<button type="submit" className="btn btn-primary">
            Login
          </button>}
          </div>
        </form>
        <div className="my-3">
          If you don't have an account then{" "}
          <Link to="/signup" className="fw-semibold fs-5 font-monospace">
            SignUp.
          </Link>
        </div>
      </div>
      <div style={{height:"50px"}}></div>
    </>
  );
};

export default Login;
