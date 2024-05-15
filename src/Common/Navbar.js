import { Link, NavLink } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

import React from "react";

export default function Navigation() {
  return (
    <div className="sticky-navbar">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <div>
              <img
                src="./assets/images/logos.png"
                alt="logo"
                style={{
                  maxWidth: "241px",
                  maxHeight: "200px",
                }}
              />
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <NavLink
                exact
                to="/"
                className="nav-link "
                activeClassName="active"
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className="nav-link"
                activeClassName="active"
              >
                About
              </NavLink>
              <NavLink
                to="/facilities"
                className="nav-link"
                activeClassName="active"
              >
                Facilities
              </NavLink>
              <NavLink
                to="/gallery"
                className="nav-link"
                activeClassName="active"
              >
                Gallery
              </NavLink>
              <NavLink
                to="/staff"
                className="nav-link"
                activeClassName="active"
              >
                Staff
              </NavLink>
              <NavLink
                to="/department"
                className="nav-link"
                activeClassName="active"
              >
                Department
              </NavLink>
              {/* <NavLink
                to="/admission"
                className="nav-link"
                activeClassName="active"
              >
                Admission
              </NavLink> */}
              <NavLink
                to="/events"
                className="nav-link"
                activeClassName="active"
              >
                Events
              </NavLink>
              <NavLink
                to="/contact"
                className="nav-link"
                activeClassName="active"
              >
                Contact
              </NavLink>
            </Nav>
            <Link to="/admission" className="btn btn-primary custom-button">
              Admission Inquiry
            </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

function MobileMenu() {
  return (
    <div className="mobile-menu">
      <span className="close-mobile-menu">
        <i className="fas fa-times"></i>
      </span>
      <div className="w-100 d-flex flex-wrap justify-content-center align-items-center">
        <NavLink to="/admission" className="custom-button">
          <span>Admission Inquiry</span>
        </NavLink>
        <div className="w-100 d-lg-none">
          <ul className="menu">
            <li>
              <NavLink exact to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/facilities">Facilities</NavLink>
            </li>
            <li>
              <NavLink to="/gallery">Gallery</NavLink>
            </li>
            <li>
              <NavLink to="/staff">Staff</NavLink>
            </li>
            <li>
              <NavLink to="/department">Department</NavLink>
            </li>
            <li>
              <NavLink to="/admission">Admission</NavLink>
            </li>
            <li>
              <NavLink to="/events">Events</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export { MobileMenu };
