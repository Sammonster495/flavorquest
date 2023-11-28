import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <nav class="navbar navbar-expand-sm bg-body-tertiary">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
            <img src="./logo.jpg" style={{"width" : "80px" , "borderRadius" : "50px"}} alt="" />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/menu">
                  Menu
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/chefs">
                  Chefs
                </Link>
              </li>
              {/* <li class="nav-item">
                <a class="nav-link disabled" aria-disabled="true">
                  Disabled
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
