import React from "react";
import "./Navbar.css";
import logo from "../../../images/logo3.png";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../UseFirebase/UseAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();
  return (
    <div className="navBar">
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid headerMainDiv">
          <img className="logo" src={logo} alt="" />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Nav.Link as={Link} to="/home">
                  Home
                </Nav.Link>
              </li>
              <li className="nav-item">
                <Nav.Link as={Link} to="/packages">
                  Packages
                </Nav.Link>
              </li>
              <li className="nav-item">
                <Nav.Link as={Link} to="/event">
                  Event
                </Nav.Link>
              </li>
              <li className="nav-item">
                <Nav.Link as={Link} to="/resort">
                  Resort
                </Nav.Link>
              </li>
              {user?.email && (
                <li className="nav-item">
                  <Nav.Link as={Link} to="/location">
                    Add A New Service
                  </Nav.Link>
                </li>
              )}
              {user?.email && (
                <li className="nav-item">
                  <Nav.Link as={Link} to="/myOrder">
                    My Orders
                  </Nav.Link>
                </li>
              )}
              <li style={{ display: "inline" }} className="nav-item">
                {user?.email ? (
                  <Nav.Link as={Link} to="/login" onClick={logOut}>
                    <span>{user.displayName}</span> LogOut{" "}
                    <img src="https://img.icons8.com/cotton/30/000000/logout-rounded-left.png" />
                  </Nav.Link>
                ) : (
                  <Nav.Link as={Link} to="/login">
                    LogIn{" "}
                    <img src="https://img.icons8.com/cotton/30/000000/login-rounded-right--v2.png" />
                  </Nav.Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
