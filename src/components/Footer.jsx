import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-2 my-2 border-top fixed-bottom px-5">
          <p className="col-md-4 mb-0 text-body-secondary h5">
            © 2024 Company, Inc
          </p>

          <Link
            to="/"
            className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
          >
            {/* <svg className="bi me-2" width="40" height="32">
              <use xlink:to="#bootstrap"></use>
            </svg> */}
          </Link>

          <ul className="nav col-md-4 justify-content-end h5">
            <li className="nav-item">
              <Link to="/" className="nav-link px-2 text-body-secondary">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link px-2 text-body-secondary">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/works" className="nav-link px-2 text-body-secondary">
                Works
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link px-2 text-body-secondary">
                Contact
              </Link>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
