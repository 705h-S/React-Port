import React from "react";
function Nav({ currentPage, handlePageChange }) {
  return (
    <nav className="main-header-menu d-flex list-group w-100">
      <ul className="nav nav-tabs space-between align-items-center d-flex flex-row justify-content-center">
        <li className="nav-item">
          <a
            href="#about"
            onClick={() => handlePageChange("About")}
            className={
              currentPage === "About" ? "nav-link text-white" : "nav-link"
            }
          >
            About
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#project"
            onClick={() => handlePageChange("Project")}
            className={
              currentPage === "Project" ? "nav-link text-white" : "nav-link"
            }
          >
            Projects
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#resume"
            onClick={() => handlePageChange("Resume")}
            className={
              currentPage === "Resume" ? "nav-link text-white" : "nav-link"
            }
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
