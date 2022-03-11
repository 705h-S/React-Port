import React from "react";
function About() {
  return (
    <div
      className=" mx-3 my-3 "
      id="about-me"
      style={{ paddingBottom: "2.5rem" }}
    >
      <h1 className="display-3 font-weight-bold d-flex justify-content-center">
        About Me
      </h1>
      <div className="row d-flex justify-content-center flex-wrap">
        <div className="col-sm-12 col-md-6 col-lg-6">
          <img src="./ava.png" alt="portrait" height="500" />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6">
          <p className="lead" id="aboutme">
            Hello, My Name is Joshua Meza, and I aspire to be a full stack web
            developer. My interest in web development started in highschool when
            I figured out that I can change the text on a site with the inspect
            tool. Fast-forward to today and I'm already building web
            applications and learning all sorts of technology.
          </p>
        </div>
      </div>

      <hr className="my-4" />
    </div>
  );
}
export default About;
