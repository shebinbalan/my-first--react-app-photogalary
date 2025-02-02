import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css"; // Import CSS for styling

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="home-container">
      <h2>Image Carousel</h2>
      <div className="carousel-container">
        <Slider {...settings}>
          <div>
            <img src="https://picsum.photos/1200/500?random=1" alt="Nature" />
          </div>
          <div>
            <img src="https://picsum.photos/1200/500?random=2" alt="City" />
          </div>
          <div>
            <img src="https://picsum.photos/1200/500?random=3" alt="Travel" />
          </div>
        </Slider>
      </div>

      {/* Cards Section */}
      <h2>Explore More</h2>
      <div className="cards-container">
        <div className="card">
          <img src="https://picsum.photos/400/250?random=4" alt="Mountains" />
          <h3>Beautiful Mountains</h3>
          <p>Experience the breathtaking views of the mountains.</p>
        </div>

        <div className="card">
          <img src="https://picsum.photos/400/250?random=5" alt="Beach" />
          <h3>Sunny Beach</h3>
          <p>Relax by the ocean and enjoy the sunny weather.</p>
        </div>

        <div className="card">
          <img src="https://picsum.photos/400/250?random=6" alt="Forest" />
          <h3>Mystic Forest</h3>
          <p>Take a walk through the enchanting green forest.</p>
        </div>
        <div className="card">
          <img src="https://picsum.photos/400/250?random=7" alt="Forest" />
          <h3>Mystic Forest</h3>
          <p>Take a walk through the enchanting green forest.</p>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; 2025 WebDevInsights. All Rights Reserved.</p>
        <div className="footer-links">
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/privacy-policy">Privacy Policy</a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
