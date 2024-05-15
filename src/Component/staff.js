import React, { useState, useEffect } from "react";
import axios from "axios";

function InstructorItem({ name, imageSrc, designation }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="col-lg-3 col-sm-6">
      <div className="instructor-item">
        <div className="instructor-thumb">
          <div>
            <img src={imageSrc} alt="instructor" />
          </div>
        </div>
        <div className="instructor-content">
          <h6 className="title">
            <p>{name}</p>
          </h6>
          <span className="details">{designation}</span>
        </div>
      </div>
    </div>
  );
}

function InstructorsSection() {
  const [instructors, setInstructors] = useState([]);

  const fetchInstructors = async () => {
    await axios
      .post(`${process.env.REACT_APP_MONGO_BASE_URL}/getStaff`)
      .then((response) => {
        const { staff } = response.data;
        setInstructors(staff);
      })
      .catch((error) => {
        console.error("Error fetching staff data:", error);
      });
  };

  useEffect(() => {
    fetchInstructors();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="instructor-section pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-center mb-30-none">
          {instructors.map((instructor, index) => (
            <InstructorItem
              key={index}
              name={instructor.name}
              imageSrc={`${process.env.REACT_APP_MONGO_BASE_URL}/images/staffPics/${instructor.staffPic}`}
              designation={instructor.designation}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default InstructorsSection;
