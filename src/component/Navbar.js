
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import gitLogo from "../images/github-mark-white.svg"

const Navbar = () => {
  const navigate=useNavigate();
  let location=useLocation();//will give an obj having the pathname same as to value
  const logout=()=>{
localStorage.removeItem("token")
localStorage.removeItem("name")
navigate("/")
  }

  const clicked=() => {
    const navbar = document.getElementById('navbarSupportedContent');
    if (navbar.classList.contains('show')) {
      navbar.classList.remove('show');
    }
  }
  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark z-0">
        <div className="container-fluid" onClick={clicked}>
          <Link className="navbar-brand text-white" to="/">
            Mystuffsafe
          </Link>
          <button
            className="navbar-toggler focus-ring focus-ring-dark"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname==="/home"?"active":""} text-white`} aria-current="page" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link text-white ${location.pathname==="/about"?"active":""}`} to="/about">
                  About
                </Link>
                </li>
                {localStorage.getItem("token")&&<li>
                <Link className={`nav-link text-white ${location.pathname==="/profile"?"active":""}`} to="/profile">
                  Profile
                </Link>
                </li>}
            </ul>
            <a href="https://github.com/the-avinash-singh/MyStuff" target="blank"><img src={gitLogo} alt="git" className="logo d-block mb-3 mb-lg-0"/></a>
           {!localStorage.getItem("token")?<form className="d-flex" role="search">
              <Link className="btn btn-primary mx-1" to="/login" role="button">
                Login
              </Link>
              <Link className="btn btn-primary mx-1" to="/signup" role="button">Signup</Link>
            </form>:<button onClick={logout} className="btn btn-primary">Logout</button>}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
