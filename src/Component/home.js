import { useState, useEffect } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export function School() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="container-fluid">
      <div className="ourSchoolSection">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 text-center ml-1">
              <img
                src="./assets/images/jadav.jpg"
                alt="About Us"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <div className="col-lg-6">
              <div className="hd_about fs-1 my-3">MARUTIDHAM VIDHYAPITH</div>
              <div className="heading1"></div>
              <p className="my-5">
                "At Marutidham Vidhyapith, we foster a culture of innovation and
                inclusivity. Our curriculum promotes intellectual curiosity,
                collaboration, and resilience, preparing students for success in
                a rapidly evolving world. In our supportive community, diversity
                is celebrated, and every student is valued for their unique
                contributions. Through personalized learning and mentorship,
                students develop the skills and confidence to lead with
                integrity. Join us at Marutidham Vidhyapith, where education
                ignites possibilities."
              </p>

              <div className="additional-content">
                <h3>Why Choose Marutidham Vidhyapith?</h3>
                <ul>
                  <li>Education tours</li>
                  <li>Well-equipped computer labs</li>
                  <li>Interactive projector facilities</li>
                  <li>Secure CCTV surveillance</li>
                  <li>Spacious playground for physical activities</li>
                  <li>Modern classrooms</li>
                  <li>Convenient school bus services</li>
                  <li>Expert teachers providing quality education</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function News() {
  const [newsImages, setNewsImages] = useState([]);

  const fetchNews = async () => {
    // Fetch news images from the server
    await axios
      .post(`${process.env.REACT_APP_MONGO_BASE_URL}/getNews`)
      .then((response) => {
        const { news } = response.data;
        const imageUrls = news.map((item) => item.newsPic);
        setNewsImages(imageUrls);
      })
      .catch((error) => {

        console.error("Error fetching news images:", error);
      });
  }
  useEffect(() => {
    fetchNews();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <section>
        <div className="sponsor-section pt-120">
          <div className="custom-container">
            <h2 className="section-header text-center my-2">School News</h2>
            <OwlCarousel
              items={7}
              loop
              autoplay
              className="sponsor-slider-2 owl-theme owl-carousel"
            >
              {/* Map over the newsImages array to generate image elements */}
              {newsImages && newsImages.map((imageUrl, index) => (
                <div key={index} className="sponsor-thumb">
                  <img
                    src={`${process.env.REACT_APP_MONGO_BASE_URL}/images/newsPics/${imageUrl}`} // Use the base URL for the server
                    alt={`news${index + 1}`}
                    className="hover-img" // Add onLoad event handler
                  />
                </div>
              ))}
            </OwlCarousel>
          </div>
        </div>
      </section>
    </>
  );
}

export function Expert() {
  const [staff, setStaff] = useState(null);

  const fetchStaff = async () => {
    await  // Fetch staff data from the server
      axios
        .post(`${process.env.REACT_APP_MONGO_BASE_URL}/getStaff`)
        .then((response) => {
          const { staff } = response.data;
          setStaff(staff);
        })
        .catch((error) => {
          setStaff([]);
          console.error("Error fetching staff data:", error);
        });
  }
  useEffect(() => {
    fetchStaff();
  }, []);

  return (
    <>
      <div className="">
        <section className="instructor-section pt-120 pb-120 gradient-bg">
          <div className="container">
            <div className="section-header">
              <span className="category">our teachers</span>
              <h2 className="title">
                <span>Awesome </span>Instructors
              </h2>
            </div>
            <div className="row justify-content-center mb-30-none">
              {staff && staff.slice(0, 4).map((staffMember, index) => (
                <div
                  key={index}
                  className="col-lg-2 col-md-4 col-sm-6"
                  style={{ marginRight: "30px" }}
                >
                  <div className="instructor-item">
                    <div className="instructor-thumb">
                      <div>
                        <img
                          src={`${process.env.REACT_APP_MONGO_BASE_URL}/images/staffPics/${staffMember.staffPic}`} // Use the base URL for the server
                          alt="instructor"
                          style={{ height: "184px", width: "184px" }}
                        />
                      </div>
                    </div>
                    <div className="instructor-content">
                      <h6 className="title">
                        <p className="fs-5 fs-bold">{staffMember.name}</p>
                      </h6>
                      <span className="details">{staffMember.designation}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

function SchoolActivity() {
  const [activity, setActivity] = useState([]);

  const fetchActivity = async () => {
    // Fetch activity data from the server
    await axios
      .post(`${process.env.REACT_APP_MONGO_BASE_URL}/getActivity`)
      .then((response) => {
        const { activity } = response.data;
        setActivity(activity);
      })
      .catch((error) => {
        console.error("Error fetching activity data:", error);
      });
  };

  useEffect(() => {
    // Fetch activity data from the server
    fetchActivity();
  }, []);

  const [activeVideo, setActiveVideo] = useState(null);

  useEffect(() => {
    const videos = document.querySelectorAll("video");

    const handleVideoPlay = (event) => {
      const currentVideoId = event.target.dataset.id;
      setActiveVideo(currentVideoId);
      videos.forEach((video) => {
        if (video !== event.target && !video.paused) {
          video.pause(); // Pause other videos if they are playing
        }
      });
    };

    videos.forEach((video) => {
      video.addEventListener("play", handleVideoPlay);
      return () => {
        video.removeEventListener("play", handleVideoPlay);
      };
    });
  }, []);

  return (
    <div className="container">
      <div className="row">
        <h1
          className="fw-bold text-center pb-120 "
          style={{ color: "orangered", fontSize: "70px" }}
        >
          School Activities
        </h1>
        {activity.map((activityItem, index) => (
          <div className="col-md-3 mb-4" key={activityItem._id}>
            <div className="card">
              <div className="card-body">
                <video
                  controls
                  loop
                  className="card-img-top"
                  autoPlay={activeVideo === activityItem._id}
                  data-id={activityItem._id}
                  style={{
                    width: "100%",
                    height: "250px",
                  }}
                >
                  <source
                    src={`${process.env.REACT_APP_MONGO_BASE_URL}/images/activityPics/${activityItem.activityVideo}`} // Use the base URL for the server
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Images() {
  const [galleryImgs, setGalleryImgs] = useState([]);

  const fetchGallery = async () => {
    // Fetch gallery images data from the server
    await axios.post(`${process.env.REACT_APP_MONGO_BASE_URL}/getGallery`)
      .then(response => {
        const { galleryImgs } = response.data;
        setGalleryImgs(galleryImgs);
      })
      .catch(error => {
        console.error('Error fetching gallery images data:', error);
      });
  };

  useEffect(() => {
    // Fetch gallery images data from the server
    fetchGallery();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    const images = document.querySelectorAll(".gallery-image");

    const handleImageClick = (event) => {
      const currentImageId = event.target.dataset.id;
      setActiveImage(currentImageId);
    };

    images.forEach((image) => {
      image.addEventListener("click", handleImageClick);
      return () => {
        image.removeEventListener("click", handleImageClick);
      };
    });
  }, []);

  return (
    <div className="container">
      <div className="row">
        <h1 className="fw-bold text-center my-3">School Gallerys</h1>
        {galleryImgs.map((galleryImg, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <div
              className={`card ${activeImage === galleryImg._id ? "border-primary" : ""
                }`}
            >
              <div className="card-body">
                <img
                  src={`${process.env.REACT_APP_MONGO_BASE_URL}/images/galleryPics/${galleryImg.imageName}`} // Use the base URL for the server
                  alt={`Activity ${index + 1}`}
                  className="card-img-top gallery-image"
                  data-id={galleryImg._id}
                  style={{
                    width: "100%",
                    height: "250px",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Images;

const InstagramPostCard = () => {
  // Default values for the Instagram posts
  const posts = [
    {
      imageUrl: "./assets/images/instagram.jpg",
      postLink: "https://www.instagram.com/marutidhamvidhyapith/",
    },
    {
      imageUrl: "./assets/images/insta2.jpg",
      postLink: "https://www.instagram.com/marutidhamvidhyapith/",
    },
    {
      imageUrl: "./assets/images/insta3.jpg",
      postLink: "https://www.instagram.com/marutidhamvidhyapith/",
    },
    // Add more posts as needed
  ];

  return (
    <Container className="mt-5">
      <Row>
        <h3 style={{ color: "orangered" }} className="text-center my-5">
          {" "}
          Follow us on Social Media
        </h3>
        {posts.map((post, index) => (
          <Col key={index} md={4} className="mb-4">
            <a href={post.postLink} target="_blank" rel="noopener noreferrer">
              <Card style={{ width: "300px" }}>
                <Card.Img
                  variant="top"
                  src={post.imageUrl}
                  alt="Instagram Post"
                  height="300px"
                />
              </Card>
            </a>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export { SchoolActivity, Images, InstagramPostCard };
