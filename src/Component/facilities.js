import { useState, useEffect } from "react";
import axios from "axios";

export default function Facilities() {
  const [facilities, setFacilities] = useState([]);
  const fetchFacilities = async () => {
    await axios
      .post(`${process.env.REACT_APP_MONGO_BASE_URL}/getFacility`)
      .then((response) => {
        const { facilities } = response.data;
        setFacilities(facilities);
      })
      .catch((error) => {
        console.error("Error fetching facilities data:", error);
      });
  }
  useEffect(() => {
    // Fetch facilities data from the server
    fetchFacilities();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <section className="course-section pt-120 pb-120">
        <div className="container">
          <div className="row align-items-center section-header">
            <div className="col-lg-7">
              <div className="section-header left-style mb-low mb-lg-0">
                <span className="category">TOP FACILITIES</span>
                <h2 className="title">
                  <span>Facilities</span> We Offer
                </h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center mb-30-none">
            {facilities.map((facility, index) => (
              <div key={index} className="col-xl-4 col-md-6 col-sm-10">
                <div className="course-item">
                  <div className="thumb">
                    <img
                      style={{ height: "300px", width: "400px", objectFit: "cover" }}
                      src={`${process.env.REACT_APP_MONGO_BASE_URL}/images/facilityPics/${facility.facilityPics[0]}`}
                      alt={facility.facilityName}
                    />
                  </div>
                  <div className="content">
                    <h5 className="title">{facility.facilityName}</h5>
                    <p className="description text-secondary">
                      {facility.facilityDesc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
