import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./Common/Footer";
import Navbar, { MobileMenu } from "./Common/Navbar";
import Slider, { PopupModal } from "./Common/Slider";
import Aboutbanner, {
  AdmissionBanner,
  ContactBanner,
  DepartmentBanner,
  GalleryBanner,
  StaffBanner,
} from "./Common/banner";
import { FacilityBanner } from "./Common/banner";
import SchoolDepartment from "./Component/about";
import Facilities from "./Component/facilities";
import {
  News,
  Expert,
  SchoolActivity,
  Images,
  InstagramPostCard,
  School,
} from "./Component/home";
import InstructorsSection from "./Component/staff";
import SchoolEvents from "./Component/events";
import ContactDetails, { ContactForm, Maps } from "./Component/contact";
import SchoolAdmissionForm from "./Component/Admission";
import { useEffect } from "react";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/about" element={<About />} />
          <Route path="/facilities" element={<Facilitiy />} />
          <Route path="/gallery" element={<Gallerys />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/department" element={<Department />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/events" element={<SchoolEvents />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

function Header() {
  return (
    <>
      <PopupModal />
      <Navbar />
      <MobileMenu />

      <Slider />
      <School />

      <News />
      <SchoolActivity />
      <InstagramPostCard />
      <Footer />
    </>
  );
}

function About() {
  return (
    <>
      <Navbar />
      <MobileMenu />
      <Aboutbanner />
      <School />
      <Expert />
      <Footer />
    </>
  );
}

function Facilitiy() {
  return (
    <>
      <Navbar />
      <MobileMenu />
      <FacilityBanner />
      <Facilities />
      <Footer />
    </>
  );
}

function Gallerys() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [])
  return (
    <>
      <Navbar />
      <MobileMenu />
      <GalleryBanner />
      <Images />
      <InstagramPostCard />

      <Footer />
    </>
  );
}

function Staff() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [])
  return (
    <>
      <Navbar />
      <MobileMenu />
      <StaffBanner />

      <InstructorsSection />

      <Footer />
    </>
  );
}

function Department() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [])
  return (
    <>
      <Navbar />
      <MobileMenu />

      <DepartmentBanner />

      <SchoolDepartment />

      <Footer />
    </>
  );
}

function Contact() {
  return (
    <>
      <Navbar />
      <MobileMenu />
      <ContactBanner />
      <ContactDetails />
      <Maps />

      <ContactForm />

      <Footer />
    </>
  );
}

function Admission() {
  return (
    <>
      <Navbar />
      <MobileMenu />
      <AdmissionBanner />
      <SchoolAdmissionForm />

      <Footer />
    </>
  );
}

export default App;
