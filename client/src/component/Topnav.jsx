import React from "react";
import { Link } from "react-router-dom";

const Topnav = () => {
  return (
    <div
      className="container-fluid bg-black text-light"
      style={{
        height: "50px", 
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", 
      }}
    >
      <div className="row align-items-center h-100">
        <div className="col-2 text-start admin-text">
          <h6>Admin Zone</h6>
        </div>
        <div className="col-2 ms-auto text-end" style={{ paddingRight: "40px" }}> {/* Adjust padding */}
          <h6>
            <Link to="/adlogin" className="nav-link logout-link">
              <i className="fa-solid fa-right-from-bracket me-2"></i>
              Logout
            </Link>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Topnav;
