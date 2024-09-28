import React, { useState } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { Link, useNavigate } from "react-router-dom";
import loginimg from "../component/assets/login.jpg";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Importing eye icons

const backendUrl = process.env.REACT_APP_BACKEND_URL;
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State for password visibility

  const navigate = useNavigate();
  const logcode = async (e) => {
    e.preventDefault();
    const user = { email, password };
    const response = await fetch(`${backendUrl}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    console.log(data);
    if (data.msg === "Login Success") {
      alert("Login Success");
      console.log(data.id);
      setEmail("");
      setPassword("");
      navigate(`/userdash/${data.id}`);
    } else {
      alert(data.msg);
    }
  };

  return (
    <>
      <Navbar />
      <div
        className="row"
        style={{
          backgroundImage: `url(${loginimg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          paddingTop: '80px',
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          className="col-md-6 mx-auto p-5 shadow-lg my-5 rounded"
          style={{
            background: `rgba(0, 0, 0, 0.75)`,
            color: "#ffffff",
            boxShadow: "0 8px 20px rgba(0, 0, 0, 0.6)",
            borderRadius: "15px",
            padding: "40px",
          }}
        >
          <form onSubmit={logcode}>
            <h4 className="text-center mb-4">
              <span className="text-danger text-decoration-underline">Login</span> Form
            </h4>

            <div className="form-group mb-3">
              <label className="form-label text-white">Enter Your Email :</label>
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
                }}
              />
            </div>

            <div className="form-group mb-3">
              <label className="form-label text-white">Enter Your Password :</label>
              <div style={{ position: "relative" }}>
                <input
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type={showPassword ? "text" : "password"} // Toggle between text and password
                  name="password"
                  required
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                    color: "#ffffff",
                    border: "none",
                    borderRadius: "8px",
                    padding: "10px",
                  }}
                />
                <span
                  onClick={() => setShowPassword(!showPassword)} // Toggle password visibility
                  style={{
                    position: "absolute",
                    right: "10px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    cursor: "pointer",
                    color: "#ffffff",
                  }}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>

            <button
              className="btn btn-primary mb-3 w-100"
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
              LogIn
            </button>

            <div className="text-center mt-3">
              <Link to={"/registration"} className="text-light">
                Create New Account
              </Link>
            </div>
            <div className="text-center mt-3">
              <Link
                to="/adlogin"
                className="font-weight-bold"
                style={{
                  textDecoration: "none",
                  padding: "10px 20px",
                  borderRadius: "5px",
                  backgroundColor: "white",
                  color: "red", 
                  display: "inline-block",
                  transition: "background-color 0.3s ease, color 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "red";
                  e.target.style.color = "white";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "white";
                  e.target.style.color = "red";
                }}
              >
                Admin Login
              </Link>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
