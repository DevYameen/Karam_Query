import React, { useEffect, useState } from "react";
import Adsidenav from "../component/Adsidenav";
import Topnav from "../component/Topnav";
import proimg from "../component/assets/viewprocessing.webp";
import "../component/Viewallproquery.css"; 

const Viewallproquery = () => {
  const [penquery, setPenQuery] = useState([]);
  var [count, setCount] = useState(1);
  
  const backendUrl = process.env.REACT_APP_BACKEND_URL;

  const getPenQuery = async () => {
    try {
      const response = await fetch(`${backendUrl}/ad/allproquery`);
      const data = await response.json();
      if (data.msg === "Success") {
        setPenQuery(data.queries);
      }
      console.log(data.queries);
    } catch (error) {
      console.error("Error fetching processed queries:", error);
    }
  };

  const handleProcess = async (id) => { // Renamed from `process` to `handleProcess`
    try {
      const status = { status: "completed" };
      const response = await fetch(`${backendUrl}/status/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(status),
      });
      const data = await response.json();
      if (data.msg === "Success") {
        alert("Query marked as completed");
        getPenQuery();
      } else {
        alert("Error marking query as completed");
      }
    } catch (error) {
      console.error("Error updating query status:", error);
    }
  };

  useEffect(() => {
    getPenQuery();
  }, []);

  // Inline styles for background image
  const containerStyle = {
    backgroundImage: `url(${proimg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <>
      <div className="row vh-7">
        <div className="col-sm-12 bg-dark text-light">
          <Topnav />
        </div>
      </div>
      <div className="row vh-93">
        <div className="col-2 h-100 scroll bg-dark" style={containerStyle}>
          <Adsidenav />
        </div>
        <div className="col-10 h-100 scroll" style={containerStyle}>
          <div className="row h-100">
            <div className="col-md-6 table-responsive mx-auto p-2 my-auto rounded-4 shadow-lg">
              <table className="table glassy-table">
                <thead>
                  <tr>
                    <th>Sr. No.</th>
                    <th>Department</th>
                    <th>Subject</th>
                    <th>Query</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {penquery.map((e, index) => (
                    <tr key={e._id}>
                      <td>{index + 1}</td> {/* Updated to use index + 1 */}
                      <td>{e.department}</td>
                      <td>{e.subject}</td>
                      <td>{e.description}</td>
                      <td>
                        <button
                          onClick={() => handleProcess(e._id)} // Updated function call
                          className="btn btn-danger"
                        >
                          Mark Completed
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Viewallproquery;
