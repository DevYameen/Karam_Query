import React, { useState } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { Link, useNavigate } from "react-router-dom";

import regimg from "../component/assets/registration.avif";

const backendUrl = process.env.REACT_APP_BACKEND_URL;
const Registration = () => {
  const navigate = useNavigate();

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const regcode = async (e) => {
    e.preventDefault();
    const user = { firstname, lastname, email, password };
    const response = await fetch(`${backendUrl}/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const result = await response.json();
    if (result.msg === "Success") {
      alert("Registration Success");
      setFirstname("");
      setLastname("");
      setEmail("");
      setPassword("");
      navigate("/login");
    } else {
      alert("Registration Failed");
    }
  };

  return (
    <>
     <Navbar />

<div
  className="row"
  style={{
    backgroundImage: `url(${regimg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    paddingTop: '20px',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "background-color 1s ease-in-out", 
  }}
>
  <div
    className="col-md-6 mx-auto p-5 shadow-lg my-5 rounded-5"
    style={{
      background: `linear-gradient(135deg, rgba(0, 50, 0, 0.8), rgba(150, 0, 0, 0.5))`,
      color: "#ffffff",
      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.6)", 
      borderRadius: "15px",
      transition: "background 2s ease-in-out", 
    }}
  >
    <form onSubmit={regcode}>
      <h4 className="text-center mb-4">
        <span className="text-danger text-decoration-underline">Registration</span> Form
      </h4>

      <div className="form-group mb-3">
        <label className="form-label">Enter Your First Name:</label>
        <input
          className="form-control"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
          type="text"
          name="firstName"
          required
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            color: "#ffffff",
            border: "none",
            borderRadius: "8px",
            padding: "10px",
            transition: "border 0.3s ease",
          }}
          onFocus={(e) => (e.target.style.border = "2px solid #00ff00")}
          onBlur={(e) => (e.target.style.border = "none")}
        />
      </div>

      <div className="form-group mb-3">
        <label className="form-label">Enter Your Last Name:</label>
        <input
          className="form-control"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
          type="text"
          name="lastName"
          required
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            color: "#ffffff",
            border: "none",
            borderRadius: "8px",
            padding: "10px",
            transition: "border 0.3s ease",
          }}
          onFocus={(e) => (e.target.style.border = "2px solid #00ff00")}
          onBlur={(e) => (e.target.style.border = "none")}
        />
      </div>

      <div className="form-group mb-3">
        <label className="form-label">Enter Your Email:</label>
        <input
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
          required
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            color: "#ffffff",
            border: "none",
            borderRadius: "8px",
            padding: "10px",
            transition: "border 0.3s ease",
          }}
          onFocus={(e) => (e.target.style.border = "2px solid #00ff00")}
          onBlur={(e) => (e.target.style.border = "none")}
        />
      </div>

      <div className="form-group mb-3">
        <label className="form-label">Enter Your Password:</label>
        <input
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="password"
          required
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            color: "#ffffff",
            border: "none",
            borderRadius: "8px",
            padding: "10px",
            transition: "border 0.3s ease",
          }}
          onFocus={(e) => (e.target.style.border = "2px solid #00ff00")}
          onBlur={(e) => (e.target.style.border = "none")}
        />
      </div>

      <button
        className="mb-3 form-control btn btn-primary"
        type="submit"
        style={{
          backgroundColor: "#007bff",
          borderColor: "#007bff",
          transition: "background-color 0.3s ease, transform 0.3s ease",
        }}
        onMouseDown={(e) => (e.target.style.transform = "scale(0.95)")}
        onMouseUp={(e) => (e.target.style.transform = "scale(1)")}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "#0056b3")}
        onMouseLeave={(e) => (e.target.style.backgroundColor = "#007bff")}
      >
        Register
      </button>

      <div className="text-center mt-3">
        <Link to={"/login"} className="text-light">
          Already Have An Account?
        </Link>
      </div>
    </form>
  </div>
</div>

<Footer />

    </>
  );
};

export default Registration;
