import React from "react";

const Blogs = () => {
  return (
    <div className="row container">
      <div
        class="card border-primary mb-3 col-12 col-sm-6 col-md-3 col-lg-4 my-3 mx-0 
      "
      >
        <div class="card-header"> Difference between javascript and nodejs</div>
        <div class="card-body text-dark">
          <p class="card-text">
            <h1 className="text-center text-info">Javascript</h1>
            <ul>
              <ol> Javascript is programming language.</ol>
              <li> Javascript is interpreted language.</li>
              <li>
                {" "}
                Javascript run any browser and also its new version is ES6.
              </li>
              <li>
                {" "}
                Javascript most using framework React,Angular,Vue,Next,Electron
                and so more.
              </li>
              <li> Javascript is on the working chrome v8 engin.</li>
              <li> Javascript is interpreted language.</li>
            </ul>
            <h1 className="text-center text-info">Node Js</h1>
            <ul>
              <ol> Node js is run on the backend site or server side.</ol>
              <li> Node js has written C and C++.</li>
              <li> Node js its scalable and so smooth for web application.</li>
              <li> Node js most using framework Express and so more.</li>
              <li> Node js is only the working chrome v8 engin.</li>
              <li>
                {" "}
                Node js is runtime env for js and also use specific for js.
              </li>
            </ul>
          </p>
        </div>
      </div>
      <div class="card border-secondary mb-3 col-12 col-sm-6 col-md-3 col-lg-4 my-3 mx-0 ">
        <div class="card-header">
          When should you use nodejs and when should you use mongodb
        </div>
        <div class="card-body text-secondary">
          <p class="card-text">
            <h1 className="text-center text-info">Mongodb</h1>
            <ol>
              <li>Mongodb is open source databases.</li>
              <li> Mongodb is no sql db and also written C++.</li>
              <li>
                {" "}
                You can use any interection or store data and using python C++
                C# so more.
              </li>
              <li>
                {" "}
                Mongodb has CRUD operation like you can data create delete
                update and also read.{" "}
              </li>
              <li>
                MongoDB stores JSON documents in collections with dynamic
                schemas.
              </li>
              <li>
                Mongodb scales easily with no downtime, and without changing
                your application.
              </li>
            </ol>
            <h1 className="text-center text-info">Node Js</h1>
            <ul>
              <ol>It is runtime scalable and stressless js runtime env.</ol>
              <li> User can easily interact without trouble.</li>
              <li>
                {" "}
                Node js have very popular framework express which connect and
                front and backend without any trouble.
              </li>
              <li>
                {" "}
                Node js all you have npm like node package manager you can do
                anything.
              </li>
              <li> You do not follow hyper rule regulation stores data</li>
              <li> Overall user satisfaction scalable env.</li>
            </ul>
          </p>
        </div>
      </div>
      <div class="card border-success mb-3 col-12 col-sm-6 col-md-3 col-lg-4 my-3 mx-0 ">
        <div class="card-header">
          Differences between sql and nosql databases.
        </div>
        <div class="card-body text-success">
          <p class="card-text">
            <h1 className="text-center text-info">Sql </h1>
            <ol>
              <li>There lot of database sql one of them.</li>
              <li> It is Relational Database Management System. </li>
              <li> Sql is vertical scalable.</li>
              <li> It is follow table based like row and column.</li>
              <li>SQL databases are better for multi-row transactions.</li>
            </ol>
            <h1 className="text-center text-info">No Sql </h1>
            <ul>
              <ol>No sql is not follow RDMS</ol>
              <li> No sql is horizontally</li>
              <li>
                {" "}
                Its not follow table or row and column you can freedom way store
                data.{" "}
              </li>
              <li>
                {" "}
                Node js all you have npm like node package manager you can do
                anything.
              </li>
              <li> No sql have lot of db like mongodb ,apache and so more.</li>
            </ul>
          </p>
        </div>
      </div>
      <div class="card border-danger mb-3 mr-2 col-12 col-sm-6 col-md-3 col-lg-4 my-3 mx-0 ">
        <div class="card-header">
          What is the purpose of jwt and how does it work
        </div>
        <div class="card-body text-danger">
          <h5 class="card-title">Json web token ~jwt</h5>
          <p class="card-text">
            <ul>
              <ol>
                Json web token called jwt its maintain high security of sharing
                json api data.{" "}
              </ol>
              <li> Under the jwt using cryptography like hash algorithm.</li>
              <li> Its work for data data control by one valid user.</li>
              <li> Jwt have three parts header payload and signature.</li>
              <li>
                {" "}
                Its secure user single token like script and its maintain
                individual user or admin.
              </li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
