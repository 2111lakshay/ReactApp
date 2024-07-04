import React from "react";

const About = (props) => {
  const nameArr = [
    {
      id: 1,
      name: "laksh",
    },
    {
      id: 2,
      name: "meet",
    },
    {
      id: 3,
      name: "hakim",
    },
  ];
  return (
    <div className="container-fluid p-5 my-5">
      <h1 class="display-4 fw-bold text-center">{props.title}</h1>
      <div class="row justify-content-center align-items-center g-2">
        <h1 class="display-4 ps-5 ms-5">Our Team</h1>

        <div class="col col-sm-12 col-md-9 col-lg-6 p-5">
          <ul type="square">
            {nameArr.map((name, id) => (
              <li key={id} className=" py-2 h4">
                Name : {name.name}
              </li>
            ))}
          </ul>
        </div>
        <div class="col col-sm-12 col-md-9 col-lg-6 text-center h6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
          praesentium est laboriosam iure? Eaque velit iste earum eius
          doloremque. Nulla quam nesciunt aliquid aspernatur? Autem, quaerat
          nisi dolores reiciendis odio sed quidem provident? Modi, consectetur
          quam sed hic doloribus commodi rem expedita dignissimos fugiat cum
          laborum voluptas a dolorem ullam tempora nostrum magni quos non? Cum
          saepe beatae perspiciatis reiciendis corrupti adipisci facere in nobis
          rem non necessitatibus, tempore quaerat ut rerum veniam commodi
          mollitia consequatur culpa error ipsa! Beatae quos, nemo, culpa,
          molestias quia consequatur voluptate est nobis sunt facere aspernatur
          ipsa architecto cumque odit autem impedit ratione laborum.
        </div>
      </div>
    </div>
  );
};

export default About;
