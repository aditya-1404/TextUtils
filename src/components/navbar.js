import React,{useState} from "react";
import { Link } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'


export default function (props) {
  const [progress,setProgress]=useState(0);
  const showLoading=()=>{
    let rand=Math.random()*100;
    setProgress(rand);
    setTimeout(()=>setProgress(100),500)
  }
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
                <Link className="nav-link active" onClick={showLoading} aria-current="page" to="/text-utils">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" onClick={showLoading} to='/features'>
                  Features
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" onClick={showLoading} to='/contact'>
                  Contact Us
                </Link>
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
      <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
    </div>
  );
}
