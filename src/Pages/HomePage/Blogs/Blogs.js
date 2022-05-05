import React from "react";

const Blogs = () => {
  return (
    <div className="row container">
      <div class="card border-primary mb-3 col-12 col-sm-6 col-md-4 col-lg-4 my-3 mx-0 
      " style={{maxWidth: "20rem"}}>
        <div class="card-header"> Difference between javascript and nodejs</div>
        <div class="card-body text-primary">
          <h5 class="card-title">Primary card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
      <div class="card border-secondary mb-3 col-12 col-sm-6 col-md-4 col-lg-4 my-3 mx-0 " style={{maxWidth: "20rem"}}>
        <div class="card-header">When should you use nodejs and when should you use mongodb</div>
        <div class="card-body text-secondary">
          <h5 class="card-title">Secondary card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
      <div class="card border-success mb-3 col-12 col-sm-6 col-md-4 col-lg-4 my-3 mx-0 " style={{maxWidth: "20rem"}}>
        <div class="card-header">Differences between sql and nosql databases.</div>
        <div class="card-body text-success">
          <h5 class="card-title">Success card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
      <div class="card border-danger mb-3 col-12 col-sm-6 col-md-4 col-lg-4 my-3 mx-0 " style={{maxWidth: "20rem"}}>
        <div class="card-header">What is the purpose of jwt and how does it work</div>
        <div class="card-body text-danger">
          <h5 class="card-title">Danger card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
      
      
    </div>
  );
}

export default Blogs;
