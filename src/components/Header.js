import React from "react";
import Nav from "./Nav";

function Header({ currentPage, handlePageChange }) {
  return (
    <header className="d-inline-flex flex-column space-between px-1 w-100 align-items-center align-center justify-content-around">
      <div className="h2">Joshua Meza</div>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
    </header>
  );
}
export default Header;
