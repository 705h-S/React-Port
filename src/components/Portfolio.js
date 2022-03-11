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
    backgroundColor: "gray",
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
      style={{ background: "#050f21", color: "#8bace8", height: "120vh" }}
      id="portfolio"
    >
      <div style={styles.header}>
        <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      </div>
      {renderPage()}
      {!currentPage === "Resume" ? <Footer /> : <></>}
    </div>
  );
}
export default Portfolio;
