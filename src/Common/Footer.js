import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg_img mt-80 my-5 ">
      <div className="footer-section oh pos-rel">
        <div className="course-top-shape">
          <img src="./assets/images/course/course-top-shape.png" alt="course" />
        </div>
        <div className="course-bottom-shape">
          <img
            src="./assets/images/course/course-bottom-shape.png"
            alt="course"
          />
        </div>
        <div className="container">
          <div className="footer-top">
            <div className="footer-area">
              <div className="footer-widget widget-link">
                <h5 className="title">Talk to Us</h5>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/events">Events</Link>
                  </li>
                  <li>
                    <Link to="/gallery">Gallerys</Link>
                  </li>
                </ul>
              </div>
              <div className="footer-widget widget-link">
                <h5 className="title">Information</h5>
                <ul>
                  <li>
                    <Link to="/about">About us</Link>
                  </li>
                  <li>
                    <Link to="/facilities">Facilities</Link>
                  </li>
                  <li>
                    <Link to="/staff">Staff</Link>
                  </li>
                </ul>
              </div>
              <div className="footer-widget widget-link">
                <h5 className="title">More</h5>
                <ul>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                  <li>
                    <Link to="/admission">Admission</Link>
                  </li>
                  <li>
                    <Link to="/department">Department</Link>
                  </li>
                </ul>
              </div>
              <div className="footer-widget widget-info">
                <h5 className="title">Contact Us</h5>
                <ul>
                  <li>
                    <div className="icon">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div className="content">
                      <span>Near New Marketing Yard, Opp. Nilkanth Cement Product, Paliyad Rd, Botad, Gujarat</span>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="fas fa-phone-alt"></i>
                    </div>
                    <div className="content">
                      <a href="Tel:+919427773879">+91 94277 73879</a>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="fas fa-envelope-open-text"></i>
                    </div>
                    <div className="content">
                      <a href="Mailto:marutidhamvidhyapith@gmail.com">
                        marutidhamvidhyapith@gmail.com
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="copyright-area">
            <div className="left">
              <p>&copy; Copyright 2023. Marutidham Vidhyapith</p>
            </div>
            <div className="right">
              <ul className="social-icons">
                <li>
                  <a href="#0">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#0" className="active">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#0">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#0">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
