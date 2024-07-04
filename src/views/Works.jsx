import React from "react";

const Works = (props) => {
  return (
    <div className="container-fluid p-5 my-4 ">
      <h1 className="display-3 fw-bold text-center">{props.title}</h1>
      <div className="row justify-content-center align-items-center pt-4 ps-3">
        <div className="col col-sm-12 col-md-9 col-lg-4">
          <div className="card w-75 border-dark border-2 shadow-lg">
            <div className="card-body bg-dark">
              <img
                src="https://dakatech.ir/img/item1.png"
                alt=""
                width={267}
                style={{ mixBlendMode: "color-dodge" }}
              />
              <h3 className="card-title text-center">Title</h3>
              <p className="card-text text-center">Text</p>
            </div>
          </div>
        </div>
        <div className="col col-sm-12 col-md-9 col-lg-4">
          <div className="card w-75 border-dark border-2 shadow-lg">
            <div className="card-body bg-dark">
              <img
                src="https://dakatech.ir/img/item1.png"
                alt=""
                width={267}
                style={{ mixBlendMode: "color-dodge" }}
              />
              <h3 className="card-title text-center">Title</h3>
              <p className="card-text text-center">Text</p>
            </div>
          </div>
        </div>
        <div className="col col-sm-12 col-md-9 col-lg-4">
          <div className="card w-75 border-dark border-2 shadow-lg">
            <div className="card-body bg-dark">
              <img
                src="https://dakatech.ir/img/item1.png"
                alt=""
                width={267}
                style={{ mixBlendMode: "color-dodge" }}
              />
              <h3 className="card-title text-center">Title</h3>
              <p className="card-text text-center">Text</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
