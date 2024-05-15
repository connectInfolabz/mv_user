import Carousel from "react-bootstrap/Carousel";
import { Modal } from "react-bootstrap";
import { useState, useEffect, useRef } from "react";

function Slider() {
  const videoRef = useRef(null);
  const [playbackRate, setPlaybackRate] = useState(1.0);

  const handlePlaybackRateChange = (rate) => {
    setPlaybackRate(rate);
    if (videoRef.current) {
      videoRef.current.playbackRate = rate;
    }
  };

  return (
    <Carousel className="my-5">
      <Carousel.Item style={{ height: "100%" }}>
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          style={{ width: "100%", height: "600px", objectFit: "cover" }}
          onLoadedMetadata={() => handlePlaybackRateChange(playbackRate)}
        >
          <source src="./assets/images/slider/slider.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export function PopupModal() {
  const [showModal, setShowModal] = useState(true);

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <Modal
      show={showModal}
      onHide={handleClose}
      id="popup-modal"
      dialogClassName="modal-responsive"
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body className="modal-body-responsive">
        <img
          src="./assets/images/logos.png"
          className="img-responsive mx-auto d-block "
          alt="maruti"
          style={{
            maxWidth: "241px",
            maxHeight: "300px",
          }}
        />
        <br />

        <span id="modal_list">
          <h1
            className="blink_me fs-1 text-center"
            style={{ color: "#0080c6" }}
          >
            Admission Open (2024/25)
          </h1>
          <br></br>

          <div style={{ textAlign: "center" }}>
            <p>
              <span
                style={{ fontFamily: "arial, helvetica, sans-serif" }}
              ></span>
            </p>
            <p>
              <span
                style={{
                  color: "#ff0000",
                  fontFamily: "arial, helvetica, sans-serif",
                  fontSize: "14px",
                }}
              >
                <strong>-Admission Form(Click Below Link)-</strong>
              </span>
            </p>
            <p>
              <a href="http://marutidhamschool.org/admission-inquiry-form.php#admission">
                http://marutidhamschool.org/admission-inquiry-form.php#admission
              </a>
            </p>
            <br></br>
            <h3>
              <span style={{ color: "#ff0000" }}>
                <strong>
                  <span style={{ fontFamily: "arial, helvetica, sans-serif" }}>
                    -Any Inquiry-
                  </span>
                </strong>
              </span>
            </h3>

            <div>
              <span style={{ color: "#ff0000" }}>
                <strong>
                  <span style={{ fontFamily: "arial, helvetica, sans-serif" }}>
                    Call/Whatsapp
                  </span>
                </strong>
              </span>
            </div>
            <br></br>
            <h2>
              <strong>
                <span
                  style={{
                    color: "#0080c6",
                    fontFamily: "arial, helvetica, sans-serif",
                  }}
                >
                  93275 15202
                </span>
              </strong>
            </h2>
            <h2>
              <strong>
                <span
                  style={{
                    color: "#0080c6",
                    fontFamily: "arial, helvetica, sans-serif",
                  }}
                >
                  93275 12185
                </span>
              </strong>
            </h2>
            <p></p>

            {/* School Website Information */}
            <p>
              Visit our school website:{" "}
              <a href="http://www.school.org">
                http://www.marutidhamschool.org
              </a>
            </p>
          </div>
        </span>
      </Modal.Body>
    </Modal>
  );
}

function Marquee() {
  useEffect(() => {
    startMarquee();
  }, []); // Run once when component mounts

  const startMarquee = () => {
    const marquee = document.querySelector(".marquee-content marquee");
    marquee.start();
  };

  return (
    <>
      <div className="marquee-container">
        <div className="marquee-content">
          {/* eslint-disable-next-line */}
          <marquee>Admission open for the session 2024-25</marquee>
        </div>
      </div>
    </>
  );
}

export default Slider;
export { Marquee };
