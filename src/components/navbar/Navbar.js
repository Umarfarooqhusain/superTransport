import React, { useState } from "react";
import { Link } from "react-scroll"; // For smooth scrolling
import "../navbar/navbar.css";
import hamburger from "../../assets/hamburger.svg";
import closeIcon from "../../assets/close.svg";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Use previous state to toggle, which is more efficient
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <header className="header" aria-label="Main Navigation">
      <nav className="navbar">
        <ul>
          <li>
            <Link to="home" smooth duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth duration={500}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="ourServices" smooth duration={500}>
              Our Services
            </Link>
          </li>
        </ul>
      </nav>

      {/* Hamburger Icon */}
      <button
        className="hamburger-icon"
        onClick={toggleSidebar}
        aria-label={isSidebarOpen ? "Close Menu" : "Open Menu"}
        aria-expanded={isSidebarOpen}
        aria-controls="sidebarMenu"
      >
        <img
          src={isSidebarOpen ? closeIcon : hamburger}
          alt={isSidebarOpen ? "Close menu" : "Open menu"}
        />
      </button>

      {/* Sidebar */}
      <aside
        id="sidebarMenu"
        className={`sidebar ${isSidebarOpen ? "open" : ""}`}
        role="complementary"
        aria-hidden={!isSidebarOpen}
      >
        <ul>
          <li>
            <Link to="home" onClick={toggleSidebar}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" onClick={toggleSidebar}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="ourServices" onClick={toggleSidebar}>
              Our Services
            </Link>
          </li>
        </ul>
      </aside>
    </header>
  );
};

export default React.memo(Header); // Prevent unnecessary re-renders
