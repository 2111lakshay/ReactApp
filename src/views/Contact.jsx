import React, { useState } from "react";

const Contact = (props) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [msg, setMsg] = useState();

  return (
    <div className="container-fluid p-3 my-5 ">
      <h1 className="display-4 fw-bold text-center">{props.title}</h1>
      <div className="container-fluid">
        <div className="row  g-2 p-5">
          <div className="col border border-dark border-3 p-3 shadow-lg w-50">
            <form action="" method="get" className="">
              <div className="form-floating mb-3 border border-dark shadow">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  id="formId1"
                  placeholder=""
                  onChange={(e) => setName(e.target.value)}
                />
                <label for="" className="">
                  Name
                </label>
              </div>
              <div className="form-floating  border border-dark shadow">
                <input
                  type="email"
                  className="form-control"
                  name="formId1"
                  id="formId1"
                  placeholder=""
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label for="">Email</label>
              </div>
              <div className="mb-3 ">
                <label for="" className="form-label"></label>
                <textarea
                  className="form-control  border border-dark shadow"
                  name=""
                  id=""
                  rows="3"
                  placeholder="Message"
                  onChange={(e) => setMsg(e.target.value)}
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-outline-secondary  border border-dark shadow"
              >
                Submit
              </button>
            </form>
          </div>
          <div className="col ps-2 pe-2">
            {/* <h1 className="display-4 text-center">Preview</h1> */}
            <div class="table-responsive border-dark border-3 border">
              <table class="table table-secondary">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Message</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="">
                    <td >{name}</td>
                    <td>{email}</td>
                    <td>{msg}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
