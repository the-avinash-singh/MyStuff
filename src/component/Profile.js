import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Profile = (props) => {
    const [credentails, setCredentails] = useState({
        name: "",
        username: "",
        email: "",
        password: "",
        cpassword: "",
      });
      let navigate = useNavigate();
      const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, username, email, password } = credentails;
        const response = await fetch(
          `https://backend-5pjd.onrender.com/api/auth/creataccount`,
          {
            method: "PUT", // *GET, POST, PUT, DELETE, etc.
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, username, email, password }),
          }
        );
        const json = await response.json();
        console.log(json);
        if (json.Success) {
          //Save and redirect
          localStorage.setItem("token", json.authtoken); //here we have saved the auth token in local storage.
          localStorage.setItem("name", json.name);
          props.showAlert("Account created successfully", "success");
          navigate("/"); //this will redirect.
        } else {
          props.showAlert("invalid cradentials", "danger");
        }
      };
      //password confermation
      let match = true;
      if (credentails.cpassword !== credentails.password) {
        match = false;
      }
      const onChange = (e) => {
        setCredentails({ ...credentails, [e.target.name]: e.target.value }); //3 dot-jo ha waha useke aage se likho, jo name attribute h uski value ko field value ke barabr kr do
      };
      const user=async()=>{
        const response = await fetch(`https://backend-5pjd.onrender.com/api/auth/getuser`, {
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
        <div className="mt-3 mx-auto shadow p-4 rounded-4 mb-3">
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
            <div className='d-flex justify-content-between'>
            <button type="submit" className="btn btn-primary">
              Edit
            </button>
          <button className="btn btn-danger">delete</button>
            </div>
          </form>
        </div>
      );
}

export default Profile
