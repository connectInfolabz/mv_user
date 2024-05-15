import React, { useEffect } from "react";
import axios from "axios";

export default function ContactDetails() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [])
  return (
    <>
      <section className="contact-section pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-6 col-xl-5">
              <div className="section-header left-style mb-lg-0">
                <h2 className="title">
                  We look forward <span>to hearing from you!</span>
                </h2>
                <p className="text text-justify">
                  To send us a message, simply fill out all fields marked with *
                  and click on "Submit" button. You can also send us an email to
                  us with marutidhamvidhyapith@gmail.com or contact us at the
                  following address:
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-xl-6">
              <div className="contact-info">
                <div className="contact-info-item">
                  <div className="icon">
                    <i className="flaticon-email"></i>
                  </div>
                  <h6 className="title">Email Address</h6>
                  <ul>
                    <li>
                      <a href="Mailto:urmail@mail.com">
                        marutidhamvidhyapith@gmail.com
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="contact-info-item">
                  <div className="icon">
                    <i className="flaticon-call"></i>
                  </div>
                  <h6 className="title">Phone Number</h6>
                  <ul>
                    <li>
                      <a href="Tel:0766052061">94277 73879</a>
                    </li>
                  </ul>
                </div>
                <div className="contact-info-item">
                  <div className="icon">
                    <i className="flaticon-destination"></i>
                  </div>
                  <h6 className="title">Location</h6>
                  <ul>
                    <li>
                      Near New Marketing Yard, Opp. Nilkanth Cement Product,
                      Paliyad Rd, Botad, Gujarat
                    </li>
                  </ul>
                </div>
                {/* <div className="contact-info-item">
                  <div className="icon">
                    <i className="flaticon-earth-grid-symbol"></i>
                  </div>
                  <h6 className="title">Website</h6>
                  <ul>
                    <li>
                      <a href="#0" target="_blank">
                        www.yoursite.ccom
                      </a>
                    </li>
                  </ul>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export function ContactForm() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [])
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_MONGO_BASE_URL}/addContactUs`,
        formData
      );

      if (response.data.success) {
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
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

  return (
    <>
      <section className="tutor-find-section pt-120 pb-120 pos-rel">
        <div className="line">
          <img src="./assets/images/shapes/line.png" alt="shapes" />
        </div>
        <span className="ball ball1"></span>
        <span className="ball ball2 ball-lg"></span>
        <div
          className="find-tutor-bg bg_img left_top d-none d-lg-block"
          data-img="./assets/images/shapes/find-tutor.png"
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-xl-6">
              <div className="section-header left-style">
                <h2 className="title">
                  <span className="d-block">Turitor’s Purpose </span>is to
                  Transform Access to Education.
                </h2>
              </div>
            </div>
          </div>
          <div className="find-tutor-wrapper">
            <form onSubmit={handleSubmit} className="find-tutor-form row">
              <div className="col-md-6">
                <div className="apply-group mb-25">
                  <label htmlFor="name" className="label-name">
                    Full Name
                  </label>
                  <label htmlFor="name" className="label-icon">
                    <i className="fas fa-user"></i>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="apply-group mb-25">
                  <label htmlFor="email" className="label-name">
                    Enter Email
                  </label>
                  <label htmlFor="email" className="label-icon">
                    <i className="fas fa-envelope"></i>
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="apply-group mb-25">
                  <label htmlFor="phone" className="label-name">
                    Phone Number
                  </label>
                  <label htmlFor="phone" className="label-icon">
                    <i className="fas fa-phone"></i>
                  </label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="apply-group mb-25">
                  <label htmlFor="grade" className="label-name">
                    Subject
                  </label>
                  <label htmlFor="grade" className="label-icon">
                    <i className="fas fa-graduation-cap"></i>
                  </label>
                  <input
                    type="text"
                    id="grade"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="apply-group mb-25">
                  <textarea
                    placeholder="Write your message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>
              <div className="col-md-6">
                <div className="apply-group mb-0">
                  <button type="submit" className="btn-sm bg-1 shadow-1">
                    Send Message <i className="fas fa-angle-right"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export function Maps() {
  return (
    <>
      <div className="maps my-3">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d123712.69298670272!2d71.52797440934069!3d22.198300049848594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3958dd0034eadf45%3A0x2f9b8af50544e3fd!2s5JXM%2BFV9%2C%20A%20world%20multiplex%2C%20Paliyad%20Rd%2C%20near%20New%20marketing%20yard%2C%20Botad%2C%20Gujarat%20364710!3m2!1d22.1986422!2d71.6347512!5e0!3m2!1sen!2sin!4v1706522106124!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: "0" }} // Change style attribute to use an object
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps"
        ></iframe>
      </div>
    </>
  );
}
