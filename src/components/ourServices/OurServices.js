import React from "react";
import "../ourServices/ourServices.css";

const OurServices = () => (
  <section className="ourServices">
    <div className="ourServices-container">
      <h2>Our Services</h2>
      <p>
        At Super Transport, we offer a range of transportation solutions
        designed to meet your logistics needs. Whether it’s a small shipment or
        large-scale freight, our expertise ensures your goods are handled with
        care and delivered on time.
      </p>

      <article className="service-item">
        <h3>Full Truckload (FTL) Services</h3>
        <p>
          Ideal for bulk shipments, our FTL service offers exclusive use of a
          truck for your goods. We guarantee fast and direct delivery with no
          stops in between, ensuring your cargo reaches its destination safely.
        </p>
      </article>

      <article className="service-item">
        <h3>Less Than Truckload (LTL) Services</h3>
        <p>
          For smaller shipments, our LTL service combines cost-effectiveness
          with reliability. Share the truck space while still enjoying timely
          deliveries and excellent handling of your goods.
        </p>
      </article>

      <article className="service-item">
        <h3>Specialized Freight Solutions</h3>
        <p>
          Transport fragile, oversized, or high-value cargo with confidence. Our
          team provides tailored solutions and takes extra precautions to ensure
          your special shipments arrive in perfect condition.
        </p>
      </article>

      <article className="service-item">
        <h3>Pan-India Delivery</h3>
        <p>
          From urban hubs to remote areas, our extensive network ensures that
          your goods can be delivered anywhere in India. No location is too far
          for Super Transport.
        </p>
      </article>

      <article className="service-item">
        <h3>Real-Time Tracking</h3>
        <p>
          Stay in control with our advanced tracking system. Monitor your
          shipment every step of the way and receive real-time updates for
          complete peace of mind.
        </p>
      </article>
    </div>
  </section>
);

export default OurServices;
