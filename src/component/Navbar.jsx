import React from "react";
import "./Navbar.css";
import logo from "../logo/png15.png";
function Navbar() {
  return (
    <div className="container-fluid">
      <nav class="navbar bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="Bootstrap" width="50" height="50" />
          </a>
          <ul className="nav justify-content-end">
            <li clasNames="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Our Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
