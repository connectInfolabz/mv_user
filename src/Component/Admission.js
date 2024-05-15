import React, { useEffect, useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import axios from "axios";

const SchoolAdmissionForm = () => {
  const [formData, setFormData] = useState({
    childName: "",
    childDOB: "",
    cClass: "",
    address: "",
    parentEmail: "",
    parentPhone: "",
    stream: "",
    gender: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      // Send the form data to the server

      const response = await axios.post(
        `${process.env.REACT_APP_MONGO_BASE_URL}/addAdmissionInquiry`,
        formData
      );

      if (response.data.success) {
        // Reset the form after successful submission
        setFormData({
          childName: "",
          childDOB: "",
          cClass: "",
          address: "",
          parentEmail: "",
          parentPhone: "",
          stream: "",
          gender: "",
        });

        alert("Form submitted successfully!");
      } else {
        alert("Form submission failed. Please try again.");
      }

    } catch (error) {
      console.error(error);
      alert("An error occurred while submitting the form. Please try again.");
    }
  };
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">School Admission Form</h2>
      <Form onSubmit={handleSubmit} className="admission-form">
        <Row>
          <Col md={6}>
            {/* First Section */}
            <Form.Group controlId="firstName">
              <Form.Label>Enter Your Child's Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter child name"
                name="childName"
                value={formData.childName}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="dateOfBirth">
              <Form.Label>Enter Your Child's Date Of Birth</Form.Label>
              <Form.Control
                type="date"
                max={new Date().toISOString().split("T")[0]}
                placeholder="Enter current date of birth"
                name="childDOB"
                value={formData.childDOB}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="currentStd">
              <Form.Label>Select Class For Admission</Form.Label>
              <Form.Control
                as="select"
                name="cClass"
                value={formData.cClass}
                onChange={handleChange}
              >
                <option value="">Select Class</option>
                <option value="LKG">LKG</option>
                <option value="HKG">HKG</option>
                <option value="Class 1">Class 1</option>
                <option value="Class 2">Class 2</option>
                <option value="Class 3">Class 3</option>
                <option value="Class 4">Class 4</option>
                <option value="Class 5">Class 5</option>
                <option value="Class 6">Class 6</option>
                <option value="Class 7">Class 7</option>
                <option value="Class 8">Class 8</option>
                <option value="Class 9">Class 9</option>
                <option value="Class 10">Class 10</option>
                <option value="Class 11">Class 11</option>
                <option value="Class 12">Class 12</option>
                {/* Add more class options as needed */}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="address">
              <Form.Label>Address</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter address"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>

          <Col md={6}>
            {/* Second Section */}
            <Form.Group controlId="parentEmail">
              <Form.Label>Parent's Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter parent's email"
                name="parentEmail"
                value={formData.parentEmail}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="parentPhone">
              <Form.Label>Parent's Phone</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter parent's phone number"
                name="parentPhone"
                value={formData.parentPhone}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="stream">
              <Form.Label>Select Stream</Form.Label>
              <Form.Control
                as="select"
                name="stream"
                value={formData.stream}
                onChange={handleChange}
              >
                <option value="">Select Stream</option>
                <option value="Science">Science</option>
                <option value="Commerce">Commerce</option>
                <option value="Arts">Arts</option>
                {/* Add more stream options as needed */}
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="gender">
              <Form.Label>Select Gender</Form.Label>
              <Form.Control
                as="select"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
                {/* Add more gender options as needed */}
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>

        <Button variant="success" type="submit" className="mt-3">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default SchoolAdmissionForm;
