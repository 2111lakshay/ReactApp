import React, { useState } from "react";
import { Link } from "react-router-dom";
import profilepic from "../assets/profilepic.png";
const Home = () => {
  const [content, setContent] = useState("CLick to know More");
  return (
    <div>
      <div className="container-fluid my-5 p-5 ">
        <div className="row justify-content-center align-items-center g-2">
          <div className="col col-sm-12 col-md-9 col-lg-6  p-5">
            <span className="display-4 fw-bold text-dark text-shadow-lg">
              Welcome Users !!
            </span>
            <p className="display-6 lh-sm fw-normal">{content}</p>
            <Link
              name=""
              id=""
              className="btn text-dark border-dark shadow"
              role="button"
              onClick={() =>
                setContent(
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit."
                )
              }
            >
              Know More
            </Link>
          </div>
          <div className="col col-sm-12 col-md-9 col-lg-6  p-3 d-flex justify-content-center align-items-center">
            <img
              className="rounded-circle shadow-sm"
              // src="https://cdn.dribbble.com/users/547293/screenshots/5925689/attachments/1274596/workplace_ilustration_dribbble.png"
              src={profilepic}
              height={400}
              width={400}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
