import React from "react";
import "../footer/footer.css";
import { Link } from "react-scroll";

// Replace these with actual environment variable or your real phone number
const whatsappNumber = +918535015786;
const phoneNumber = "+918535015786"; // Add the country code for international format

const Footer = () => {
  return (
    <footer className="footer" role="contentinfo">
      <h1>Super Transport</h1>
      <nav>
        <ul>
          <li>
            <Link to="home" smooth duration={50}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth duration={50}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="ourServices" smooth duration={50}>
              Our Services
            </Link>
          </li>
        </ul>
      </nav>

      <div className="footer-socials">
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Follow us on Instagram"
        >
          <i className="fab fa-instagram" alt="Instagram" />{" "}
          {/* Instagram icon */}
        </a>
        <a href={`tel:${phoneNumber}`} aria-label="Call us">
          <i className="fas fa-phone" alt="Phone" /> {/* Phone icon */}
        </a>
        <a
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
        >
          <i className="fab fa-whatsapp" alt="WhatsApp" /> {/* WhatsApp icon */}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
