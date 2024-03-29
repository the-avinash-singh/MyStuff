import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner";
import image from "../images/Pulse.svg"

const Profile = (props) => {
  const [load,setLoad]=useState(false)
  let navigate = useNavigate();
  useEffect(()=>{
    if(localStorage.getItem("token")===null){
      navigate("/login")
    } 
    // eslint-disable-next-line 
  },[])
  const [credentails, setCredentails] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const [edit, setEdit] = useState(false);

  const editCick = () => {
    setEdit(!edit);
  };
  //password confermation
  let match = true;
  if (credentails.cpassword !== credentails.password) {
    match = false;
  }
  const handleSubmit = async (e) => {
    setLoad(true)
    e.preventDefault();
    const { name, username, email, password } = credentails;
    if (!match) return;
    const response = await fetch(
      `https://backend-5pjd.onrender.com/api/auth/update`,
      {
        method: "PUT", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify({ name, username, email, password }),
      }
    );
    const json = await response.json();
    if (json.Success) {
      //Save and redirect
      localStorage.setItem("token", json.authToken); //here we have saved the auth token in local storage.
      localStorage.setItem("name", json.user.name);
      props.showAlert("Account edited successfully", "success");
      editCick();
      setCredentails({ ...credentails, password: "", cpassword: "" });
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
  const user = async () => {
    const response = await fetch(
      `https://backend-5pjd.onrender.com/api/auth/getuser`,
      {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify({ name: credentails.name }),
      }
    );
    const json = await response.json();
    setCredentails(json);
  };
  const del = async () => {
    const response = await fetch(
      `https://backend-5pjd.onrender.com/api/auth/`,
      {
        method: "DELETE", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      }
      );
      const json = await response.json();
      console.log(json);
    //Save and redirect
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    navigate("/login");
    props.showAlert("Account deleted successfully", "success");
  };
  if (credentails.username === "") {
    user();
  }
  const ref = useRef(null);
  const refClose = useRef(null);
  const clikced = (e) => {
    ref.current.click();
    e.preventDefault(); //this will prevent page reloading
  };
  const delClick = (e) => {
    refClose.current.click();
    e.preventDefault(); //this will prevent page reloading
    del();
  };

  return (
    <>
    {credentails.name===""?<Spinner/>:<div className="mt-3 mx-auto bg-light shadow p-4 rounded-4 mb-5">
      <button
        type="button"
        ref={ref}
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      />
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Alert
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">Delete this account permanently.</div>
            <div className="text-danger pt-0 modal-body">
              This action can't be undone
            </div>
            <div className="modal-footer d-flex justify-content-between">
              <button
                type="button"
                ref={refClose}
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              {load?<div className=" bg-danger rounded" style={{padding:"0.094rem 1.5723rem"}}>
              <img src={image} style={{width:"35px"}} alt=""/>
              </div>
              :<button
                type="button"
                className="btn btn-danger"
                onClick={delClick}
              >
                Delete it
              </button>}
            </div>
          </div>
        </div>
      </div>

      <h2 className="mb-4">Your Profile</h2>
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
        {edit && (
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
        )}
        {edit && (
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
        )}
        {edit && (
          <div className="d-flex justify-content-between">
            {load?<div className=" bg-primary rounded" style={{padding:"0 1.3265rem"}}>
              <img src={image} style={{width:"35px"}} alt=""/>
              </div>
              :<button
              type="submit"
              className="btn btn-primary"
              onClick={handleSubmit}
              disabled={!match}
            >
              Uplode
            </button>}
            <div className="btn bg-black text-white" onClick={editCick}>
              Cancel
            </div>
          </div>
        )}
      </form>
      {!edit && (
        <div className="d-flex justify-content-between">
          <div className="btn btn-primary" onClick={editCick}>
            Edit Profile
          </div>
          <button
            className="btn btn-danger"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            onClick={clikced}
          >
            Delete Profile
          </button>
        </div>
      )}
    </div>}
    <div style={{height:"20px"}}></div>
    </>
  );
};

export default Profile;
