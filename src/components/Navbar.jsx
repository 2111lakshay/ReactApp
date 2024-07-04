import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark border border-2 border-dark fixed-top rounded-5 m-2 shadow-lg ">
        <div className="container bg-dark">
          <NavLink
            id="navlink"
            className="navbar-brand bg-dark"
            // style={{ color: "#444562" }}
            to=""
          >
            ReactApp
          </NavLink>
          <button
            className="navbar-toggler hidden-lg-up"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          ></button>
          <div
            className="collapse navbar-collapse bg-dark"
            id="collapsibleNavId"
          >
            <ul className="navbar-nav me-auto mt-2 mt-lg-0 bg-dark">
              <li className="nav-item">
                <NavLink
                  className="nav-link  bg-dark "
                  to="/"
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item bg-dark">
                <NavLink className="nav-link" to="/about">
                  About Us
                </NavLink>
              </li>
              <li className="nav-item bg-dark">
                <NavLink className="nav-link" to="/works">
                  Works
                </NavLink>
              </li>
              <li className="nav-item bg-dark">
                <NavLink className="nav-link" to="/contact">
                  Contact Us
                </NavLink>
              </li>
            </ul>
            <form className="d-flex my-2 my-lg-0 bg-dark">
              <input
                className="form-control me-sm-2"
                type="text"
                placeholder="Search"
              />
              <button
                className="btn btn-outline-secondary my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
