import React, { useState } from "react";
import Navbar from "../component/Navbar";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../component/Footer";
import adloginimg from "../component/assets/adloginimg.jpg";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons for password visibility

const Adlogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const navigate = useNavigate();
  const backendUrl = process.env.REACT_APP_BACKEND_URL;
  const adlog = async (e) => {
    e.preventDefault();
    const ad = { username, password };
    const response = await fetch(`${backendUrl}/adlogin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ad),
    });
    const data = await response.json();
    if (data.msg === "Admin Login Success") {
      setUsername("");
      setPassword("");
      alert(data.msg);
      navigate("/addash");
    } else {
      alert(data.msg);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Navbar />
      <div
        className="row"
        style={{
          backgroundImage: `url(${adloginimg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          className="col-md-6 p-5 shadow-lg rounded-5"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.1)", // Semi-transparent background with some opacity
            backdropFilter: "blur(10px)", // Blur effect for the background
            borderRadius: "15px", // Rounded corners
            padding: "30px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)", // Subtle shadow for depth
            color: "white", // Text color
            backgroundImage:
              "linear-gradient(to bottom right, rgba(0, 0, 0, 0.9), rgba(255, 255, 255, 0.2))", // Gradient overlay
          }}
        >
          <form onSubmit={adlog}>
            <h4>
              <span className="text-danger text-decoration-underline">Admin</span> Login
            </h4>
            <label htmlFor="username">Enter Your Username:</label>
            <input
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="email"
              name="username"
              id="username"
              style={{ color: "white", backgroundColor: "rgba(0, 0, 0, 0.3)" }}
              required
            />
            <br />
            <label htmlFor="password">Enter Your Password:</label>
            <div style={{ position: "relative" }}>
              <input
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={showPassword ? "text" : "password"} // Toggle between 'text' and 'password'
                name="password"
                id="password"
                style={{ color: "white", backgroundColor: "rgba(0, 0, 0, 0.3)" }}
                required
              />
              <span
                onClick={togglePasswordVisibility}
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                  color: "white",
                }}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            <br />
            <button className="mb-3 form-control btn btn-primary" type="submit">
              Admin LogIn
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Adlogin;

