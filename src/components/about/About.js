import React from "react";
import "../about/about.css";

const About = () => (
  <section className="about-container" aria-labelledby="about-heading">
    <div className="about-container-section1">
      <div>
        <h2 id="about-heading">Few Words About Super Transport</h2>
        <p>
          At Super Transport, we are more than just a logistics provider—we are
          your trusted partner in transportation. With years of experience and
          an extensive fleet of trucks and semi-trailers, we specialize in
          delivering goods efficiently, safely, and on time to every corner of
          India. Our mission is to simplify logistics for businesses, big and
          small, by offering tailored solutions and unmatched reliability.
          Whether it’s bulk freight or specialized cargo, we handle it all with
          precision and care. Super Transport is built on the values of
          transparency, trust, and a relentless commitment to excellence. Let us
          take your business to the next level with our dependable services.
        </p>
      </div>
      <div>
        <div className="about-container-section2 blur-overlay" />
      </div>
    </div>
  </section>
);

export default About;
