import React, { useState } from "react";
import Sidenav from "../component/Sidenav";
import Utopnav from "../component/Utopnav";
import { useParams } from "react-router-dom";

import dash01 from "../component/assets/add.avif";

const backendUrl = process.env.REACT_APP_BACKEND_URL;
const AddQuery = () => {
  const { id } = useParams();
  const [firstname, setFirstname] = useState(""); // New state for firstname
  const [department, setDepartment] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");

  const addquery = async (e) => {
    e.preventDefault();
    const query = {
      uid: id,
      firstname: firstname, // Include firstname in the query object
      department: department,
      subject: subject,
      description: description,
      status: "pending",
    };

    const response = await fetch(`${backendUrl}/addquery/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(query),
    });

    if (response.ok) {
      alert("Query added successfully");
      setFirstname(""); // Reset firstname field
      setDepartment("");
      setSubject("");
      setDescription("");
    } else {
      alert("Failed to add query");
    }
  };

  return (
    <>
      <div className="row vh-7">
        <div className="col-sm-12 bg-dark text-light">
          <Utopnav />
        </div>
      </div>
      <div className="row vh-93">
        <div className="col-2 h-100 scroll bg-dark">
          <Sidenav />
        </div>
        <div
          className="col-10 h-100 scroll"
          style={{
            backgroundImage: `url(${dash01})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="row h-100">
            <div className="col-md-6 mx-auto">
              <form
                className="mt-5 p-5 shadow-5"
                onSubmit={addquery}
                style={{
                  background: `rgba(0, 0, 0, 0.1)`,
                  borderRadius: "20px",
                  color: "#ffffff",
                  boxShadow: "0 4px 30px rgba(0, 255, 255, 0.6)",
                  backdropFilter: "blur(2px)",
                }}
              >
                <h3 className="text-center" style={{ color: "#00FFFF" }}>
                  Submit a Query
                </h3>
                
                {/* First Name Field */}
                <label className="mt-3" style={{ color: "#FFD700" }}>
                  First Name
                </label>
                <input
                  type="text"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                  className="form-control"
                  style={{
                    backgroundColor: "#333333",
                    color: "#FFD700",
                    border: "none",
                    boxShadow: "0 0 10px rgba(255, 255, 255, 0.3)",
                  }}
                />

                <label className="mt-3" style={{ color: "#FFD700" }}>
                  Select Department
                </label>
                <select
                  className="form-control"
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  style={{
                    backgroundColor: "#333333",
                    color: "#FFD700",
                    border: "none",
                    boxShadow: "0 0 10px rgba(255, 255, 255, 0.3)",
                  }}
                >
                  <option value="1" disabled>
                    Select department
                  </option>
                  <option value={"IT"}>IT</option>
                  <option value={"Accounts"}>Accounts</option>
                  <option value={"Management"}>Management</option>
                  <option value={"Sales"}>Sales</option>
                </select>

                <label className="mt-3" style={{ color: "#FFD700" }}>
                  Enter Subject
                </label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="form-control"
                  style={{
                    backgroundColor: "#333333",
                    color: "#FFD700",
                    border: "none",
                    boxShadow: "0 0 10px rgba(255, 255, 255, 0.3)",
                  }}
                />

                <label className="mt-3" style={{ color: "#FFD700" }}>
                  Description in Detail
                </label>
                <textarea
                  className="form-control"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  style={{
                    backgroundColor: "#333333",
                    color: "#FFD700",
                    border: "none",
                    boxShadow: "0 0 10px rgba(255, 255, 255, 0.3)",
                  }}
                />

                <button
                  type="submit"
                  className="btn btn-primary mt-4"
                  style={{
                    backgroundColor: "#00FFFF",
                    border: "none",
                    color: "#000",
                    boxShadow: "0 0 15px rgba(0, 255, 255, 0.8)",
                    fontWeight: "bold",
                  }}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddQuery;
