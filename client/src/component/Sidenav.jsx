import React from "react";
import { Link, useParams } from "react-router-dom";
import sidenavBg from "./assets/sidedash.jpg"; 

const Sidenav = () => {
  const { id } = useParams();

  return (
    <div
      className="row"
      style={{
        backgroundImage: `url(${sidenavBg})`, 
        backgroundSize: "cover", 
        backgroundPosition: "center",
        height: "100vh", 
      }}
    >
      <div className="col-sm-12 text-light pt-4">
      <Link
          to={`/userdash/${id}`}
          style={{
            display: "block",
            color: "white",
            fontWeight: "bold",
            padding: "10px 15px",
            borderRadius: "10px",
            transition: "background 0.3s ease, transform 0.3s ease",
            textShadow: "0px 1px 2px rgba(0, 0, 0, 0.5)",
            margin: "10px 0",
          }}
          onMouseOver={(e) => {
            e.target.style.background = "rgba(255, 255, 255, 0.2)";
            e.target.style.transform = "scale(1.05)";
          }}
          onMouseOut={(e) => {
            e.target.style.background = "none";
            e.target.style.transform = "none";
          }}
        >
          <i className="fa fa-book"></i> Dashboard
        </Link>

        <Link
          to={`/addquery/${id}`}
          style={{
            display: "block",
            color: "white",
            fontWeight: "bold",
            padding: "10px 15px",
            borderRadius: "10px",
            transition: "background 0.3s ease, transform 0.3s ease",
            textShadow: "0px 1px 2px rgba(0, 0, 0, 0.5)",
            margin: "10px 0",
          }}
          onMouseOver={(e) => {
            e.target.style.background = "rgba(255, 255, 255, 0.2)";
            e.target.style.transform = "scale(1.05)";
          }}
          onMouseOut={(e) => {
            e.target.style.background = "none";
            e.target.style.transform = "none";
          }}
        >
          <i className="fa fa-question"></i> Add Query
        </Link>
        <Link
          to={`/viewPenQuery/${id}`}
          style={{
            display: "block",
            color: "white",
            fontWeight: "bold",
            padding: "10px 15px",
            borderRadius: "10px",
            transition: "background 0.3s ease, transform 0.3s ease",
            textShadow: "0px 1px 2px rgba(0, 0, 0, 0.5)",
            margin: "10px 0",
          }}
          onMouseOver={(e) => {
            e.target.style.background = "rgba(255, 255, 255, 0.2)";
            e.target.style.transform = "scale(1.05)";
          }}
          onMouseOut={(e) => {
            e.target.style.background = "none";
            e.target.style.transform = "none";
          }}
        >
          <i className="fa fa-eye"></i> View Pending Query
        </Link>
        <Link
          to={`/viewProQuery/${id}`}
          style={{
            display: "block",
            color: "white",
            fontWeight: "bold",
            padding: "10px 15px",
            borderRadius: "10px",
            transition: "background 0.3s ease, transform 0.3s ease",
            textShadow: "0px 1px 2px rgba(0, 0, 0, 0.5)",
            margin: "10px 0",
          }}
          onMouseOver={(e) => {
            e.target.style.background = "rgba(255, 255, 255, 0.2)";
            e.target.style.transform = "scale(1.05)";
          }}
          onMouseOut={(e) => {
            e.target.style.background = "none";
            e.target.style.transform = "none";
          }}
        >
          <i className="fa fa-eye"></i> View Processing Query
        </Link>

        <Link
          to={`/viewComQuery/${id}`}
          style={{
            display: "block",
            color: "white",
            fontWeight: "bold",
            padding: "10px 15px",
            borderRadius: "10px",
            transition: "background 0.3s ease, transform 0.3s ease",
            textShadow: "0px 1px 2px rgba(0, 0, 0, 0.5)",
            margin: "10px 0",
          }}
          onMouseOver={(e) => {
            e.target.style.background = "rgba(255, 255, 255, 0.2)";
            e.target.style.transform = "scale(1.05)";
          }}
          onMouseOut={(e) => {
            e.target.style.background = "none";
            e.target.style.transform = "none";
          }}
        >
          <i className="fa fa-eye"></i> View Completed Query
        </Link>
      </div>
    </div>
  );
};

export default Sidenav;
