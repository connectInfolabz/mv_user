import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar, { MobileMenu } from "../Common/Navbar";
import Footer from "../Common/Footer";
import { EventBanner } from "../Common/banner";

export default function SchoolEvents() {
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const fetchEvents = async () => {
    await axios
      .post(`${process.env.REACT_APP_MONGO_BASE_URL}/getEvent`)
      .then((response) => {
        const { events } = response.data;
        setUpcomingEvents(events);
      })
      .catch((error) => {
        console.error("Error fetching events data:", error);
      });
  }
  useEffect(() => {
    fetchEvents();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Navbar />
      <MobileMenu />
      <EventBanner />
      <section className="course-section pt-120 pb-120">
        <div className="container">
          <div className="row align-items-center section-header">
            <div className="col-lg-7">
              <div className="section-header left-style mb-low mb-lg-0">
                <span className="category">SCHOOL EVENTS</span>
                <h2 className="title">
                  <span>Exciting</span> School Events
                </h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center mb-30-none">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="col-xl-4 col-md-6 col-sm-10 my-2">
                <div className="course-item" style={{ height: "100%", width: "100%" }}>
                  <div className="thumb">
                    <a href="course-details.html">
                      <img
                        src={`${process.env.REACT_APP_MONGO_BASE_URL}/images/eventPics/${event.eventImgs[0]}`}
                        alt={event.eventName}
                        style={{ height: "300px", width: "100%", objectFit: "cover" }}
                      />
                    </a>
                  </div>
                  <div className="content">
                    <h5 className="title">
                      <a href="./course-details.html">{event.eventName}</a>
                    </h5>
                    <p className="description text-secondary" style={{ fontWeight: "bold" }}>
                      {event.eventDesc}
                    </p>
                    <p className="date text-secondary">Date: {new Date(event.dateOfEvent).toDateString()}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
