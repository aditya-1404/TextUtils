import React,{useState} from "react";
import { Link } from 'react-router-dom';

export default function (props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode=='dark'?"dark":"light"} bg-${props.mode=='dark'?"dark":"light"}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/text-utils">
            <strong>TextUtils</strong>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/text-utils">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/features'>
                  Features
                </Link>
              </li>
              <li className="nav-item dropdown">
              </li>
            </ul>
            <div className="htmlForm-check htmlForm-switch ms-auto">
              <div class="form-check form-switch">
                <input
                  class="form-check-input "
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  onClick={props.toggle}
                />
                <label class="form-check-label " style={{color:"grey"}} for="flexSwitchCheckDefault">
                  DarkMode
                </label>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
