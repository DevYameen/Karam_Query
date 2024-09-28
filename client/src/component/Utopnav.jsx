import React from "react";
import { Link } from "react-router-dom";


const Utopnav = () => {
  return (
    <div
      className="container-fluid bg-black text-light"
      style={{
        height: "50px", // Original height
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Subtle shadow for aesthetics
      }}
    >
      <div className="row align-items-center h-100">
        <div className="col-1 text-start user-text">
          User App
        </div>
        <div className="col-2 ms-auto text-end" style={{ paddingRight: "40px" }}>
          <Link to="/login" className="nav-link logout-link">
            <i className="fa-solid fa-right-from-bracket me-2"></i>
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Utopnav;

