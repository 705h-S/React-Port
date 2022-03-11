import Nav from "./Nav";
import Header from "./Header";
import Footer from "./Footer";
import Resume from "./pages/Resume";
import Project from "./pages/Project";
import About from "./pages/About";
import React, { useState } from "react";
const styles = {
  header: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#eec0c6",
    backgroundImage: "linear-gradient(315deg, #eec0c6 0%, #7ee8fa 74%)",
    color: "black",
  },
};

function Portfolio() {
  const [currentPage, setCurrentPage] = useState("About");

  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Project") {
      return <Project />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div
      style={{ backgroundColor: "#7f5a83",
        backgroundImage: "linear-gradient(315deg, #7f5a83 0%, #0d324d 74%)",
         color: "white", height: "120vh" }}
      id="portfolio"
    >
      <div style={styles.header}>
        <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      </div>
      {renderPage()}
      {!currentPage === "Resume" ? <Footer /> : <></>}
      <h1 className="d-flex justify-content-center" > Contact </h1>
      <Footer /> 
    </div>
  );
}
export default Portfolio;
