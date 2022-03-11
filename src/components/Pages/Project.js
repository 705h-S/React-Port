import React from "react";
const data = require('../assets/projects.json');
const styles = {
  display: "flex",
  flexDirection: "row",
};
function Project() {
  return (
    <div
      style={styles}
      className="mx-auto d-inline-flex flex-row justify-content-around flex-wrap , paddingBottom:'2.5rem'"
    >
      {data.projects.map((res, i) => (
        <div
          className="card m-2 flex-wrap "
          style={{
            width: "25rem",
            background: "#b3cdd1",
            backgroundImage: "linear-gradient(315deg, #b3cdd1 0%, #9fa4c4 74%)",            
            color: "#000000",
            textAlign: "center",
          }}
          key={i}
        >
          <img className="card-img-top" src={res.imagePath} alt="Card cap" />
          <div className="card-body d-flex flex-column align-content-center">
            <h5 className="card-title">{res.project}</h5>
            <p className="card-text">{res.description}</p>
            <a href={res.repo} target="_blank" rel="noreferrer">
              Repo
            </a>
            <a href={res.site} target="_blank" rel="noreferrer">
              {" "}
              Deployed Site{" "}
            </a>{" "}
          </div>
        </div>
      ))}
    </div>
  );
}
export default Project;
