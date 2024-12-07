import React from "react";
import "../home/home.css";

const Home = () => (
  <div className="home">
    <div className="home-container1">
      <div className="img" aria-hidden="true"></div>
      {/* Hiding img div from screen readers */}
      <div className="section0">
        <h1>Reliable Trucking & Logistics Across India</h1>
        <p>
          We specialize in efficient, on-time delivery via trucks and
          semi-trailers across India. With a robust fleet and a commitment to
          excellence, we ensure your goods reach their destination safely and on
          schedule.
        </p>
      </div>
    </div>
    <div className="home-container2">
      <div className="home-container-section1 section1">
        <div className="container2-image blur-overlay" aria-hidden="true"></div>{" "}
        {/* Hiding image overlay from screen readers */}
        <div className="text-overlay">
          <h2>Seamless Logistics</h2>
          <p>
            Experience hassle-free transportation services tailored to your
            needs. Whether it’s full truckloads or smaller shipments, our fleet
            of trucks and semi-trailers ensures timely and efficient delivery
            across India. From door-to-door solutions to specialized cargo
            handling, we make logistics simple.
          </p>
        </div>
      </div>
      <div className="home-container-section1 section2">
        <div className="container2-image blur-overlay" aria-hidden="true"></div>{" "}
        {/* Hiding image overlay from screen readers */}
        <div className="text-overlay">
          <h2>Why Us?</h2>
          <p>
            We are committed to delivering excellence in every mile we cover.
            With a proven track record of on-time deliveries, real-time tracking
            for your peace of mind, and a team of experts dedicated to customer
            satisfaction, we are the trusted choice for businesses nationwide.
          </p>
        </div>
      </div>
      <div className="home-container-section1 section3">
        <div className="container2-image blur-overlay" aria-hidden="true"></div>{" "}
        {/* Hiding image overlay from screen readers */}
        <div className="text-overlay">
          <h2>Let’s Work Together</h2>
          <p>
            Looking for a reliable logistics partner? Join hands with us to
            scale your operations effortlessly. Our customized transport
            solutions, competitive pricing, and unwavering commitment to safety
            make us the ideal partner for your growing business needs.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
