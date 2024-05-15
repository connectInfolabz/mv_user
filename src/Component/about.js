import React, { useState, useEffect } from "react";
import axios from "axios";

function SchoolDepartment() {
  const [departments, setDepartments] = useState([]);

  const fetchDepartments = async () => {
    await axios
      .post(`${process.env.REACT_APP_MONGO_BASE_URL}/getDepartment`)
      .then((response) => {
        const { department } = response.data;
        setDepartments(department);
      })
      .catch((error) => {
        console.error("Error fetching department data:", error);
      });
  }
  useEffect(() => {
    fetchDepartments();
  }, []);

  return (
    <div className="container">
      <h1 className="mt-5 mb-4 fs-3 text-center">School Department</h1>
      <div className="row">
        {/* Map through the departments array */}
        {departments.map((department, index) => (
          <div className="col-md-4 my-2" key={index}>
            <div className="card" style={{ height: "100%", width: "100%" }}>
              <img
                src={`${process.env.REACT_APP_MONGO_BASE_URL}/images/departmentPics/${department.image}`}
                className="card-img-top"
                alt={department.departmentName}
              />
              <div className="card-body">
                <h5 className="card-title">{department.departmentName}</h5>
                <p className="card-text">{department.details}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SchoolDepartment;
